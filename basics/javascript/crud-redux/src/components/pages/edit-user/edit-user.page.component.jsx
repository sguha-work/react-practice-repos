import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import { action_fetchUserDetails } from "../../../redux/actions/user.action";
import EditUserFormComponent from "../../shared/edit-user-form/edit-user-form.component";
function EditUserPageComponent() {
  const dispath = useDispatch();
  let { id } = useParams();
  useEffect(()=>{
    dispath(action_fetchUserDetails(id));
  },[]);
  return (
    <div>
      <h3>Update user</h3>
      <EditUserFormComponent id={id}></EditUserFormComponent>
    </div>
  )
}
export default EditUserPageComponent