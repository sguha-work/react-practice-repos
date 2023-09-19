import React, { useEffect, useState } from 'react'
import UserListTableComponent from '../../components/user-list-table/UserListTable.component'
import USERS_STORE from '../../store/user/User.store';
import USER_ACTIONS from '../../store/user/User.actions';

export default function ListUserPageComponent() {
  const [users, setUsers] = useState([]);// this "users" is component state, don't mismatch with "USER_STORE" users, which is store state
  let unsubscribe: Function | null = null;
  useEffect(() => {
    /**
     * In this example the action "FETCH_USERS" is used to initiate AJAX call to get
     * list of users. When the AJAX call is finished "FETCH_USERS_COMPLETE" action is dispatched
     * and the fetched data is stored under "users" state of the USER_STORE. So when coming back
     * to this component from another component we are checking the state value of store is empty or not
     * if it is empty then we will trigger the action to fetch data
     * This strategy will stop unncesary ajax call to server hence improving app functionality
     */
    USERS_STORE.dispatch((dispatch) => {
      if (USERS_STORE.getState()['users'].length) {
        setUsers(USERS_STORE.getState()['users']);
      } else {
        // dispatching the event to fetch data from server
        dispatch(USER_ACTIONS.FETCH_USERS);
      }
    });

    unsubscribe = USERS_STORE.subscribe(() => {
      console.log('subscription called');
      setUsers(USERS_STORE.getState()['users']);
    });
  }, []);
  useEffect(() => () => {
    if (unsubscribe != null) {
      unsubscribe();
    }
  });
  return (
    <div>
      <h2>List User page component</h2>
      <UserListTableComponent users={users}></UserListTableComponent>
    </div>
  )
}
