import React, { useEffect, useState } from 'react'
import { useParams } from "react-router-dom";
import USERS_STORE from '../../store/user/User.store';
import USER_ACTIONS from '../../store/user/User.actions';
import UserDetailsComponent from '../../components/user-details/UserDetails.component';
export default function UserDetailsPageComponent() {
  const { id } = useParams();
  const [userDetails, setUserDetails] = useState(null);
  let unsubscribe: Function | null = null;
  useEffect(() => {
    // dispatching the action to fetch user details
    USERS_STORE.dispatch((dispatch) => {
      dispatch({ type: USER_ACTIONS.FETCH_USER_DETAILS, payload: { id } });
    });
    unsubscribe = USERS_STORE.subscribe(() => {
      console.log('subscription called from userdeatils');
      setUserDetails(USERS_STORE.getState()['userDetails']);
    });
  }, []);
  useEffect(() => {
    return () => {
      if (unsubscribe != null) {
        unsubscribe();
      }
    }
  })
  return (
    <div>
      <h2>UserDetails.page.component</h2>
      {(userDetails == null) && (
        <h3>Loading ....</h3>
      )}
      {(userDetails != null) && (
        <UserDetailsComponent userDetails={userDetails}></UserDetailsComponent>
      )}
    </div>
  )
}