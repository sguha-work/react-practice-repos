import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { action_fetchUserDetails } from "../../../redux/actions/user.action";
import UserDetailsComponent from "../../shared/user-details/user-details.component";
function ViewUserDetailsPageComponent() {
  let { id } = useParams();
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(action_fetchUserDetails(id));
  }, []);
  return (
    <div>
      <UserDetailsComponent id={id}></UserDetailsComponent>
    </div>
  )
}

export default ViewUserDetailsPageComponent