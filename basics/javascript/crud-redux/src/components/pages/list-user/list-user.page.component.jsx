import { useEffect } from "react"
import { useDispatch } from "react-redux";
import { action_fetchUsers } from "../../../redux/actions/user.action";
import ListUserTableComponent from "../../shared/list-user-table/list-user-table.component";
function ListUserPageComponent() {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(action_fetchUsers());
  },[]);
  return (
    <div>
      <ListUserTableComponent></ListUserTableComponent>
    </div>
  )
}
export default ListUserPageComponent