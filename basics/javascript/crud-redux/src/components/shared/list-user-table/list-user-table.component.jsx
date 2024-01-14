import { useSelector } from "react-redux";
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom';

function ListUserTableComponent() {
  const [users, setUsers] = useState([]);
  const state = useSelector((state) => state);
  const navigate = useNavigate();
  useEffect(() => {
    console.log(state);
    setUsers(state.users);
  }, [state.users]);
  const editUser = ((userId) => {
    navigate(`/user/update/${userId}`);
  });
  const viewUserDetails = ((userId) => {
    navigate(`/user/details/${userId}`)
  });
  const deleteUser = ((userId) => {
    alert(userId);
  });
  return (
    <div>
      <h3>List of users</h3>
      {users.data && users.data.data && users.data.data.length && (<table>
        <thead>
          <tr>
            <th>
              Id
            </th>
            <th>
              First name
            </th>
            <th>
              Last name
            </th>
            <th>
              Email
            </th>
            <th>
              Avatar
            </th>
            <th>
              Action
            </th>
          </tr>
        </thead>
        <tbody>
          {
            users.data.data.map((user) => (
              <tr key={user.id}>
                <td>
                  {user.id}
                </td>
                <td>
                  {user.first_name}
                </td>
                <td>
                  {user.last_name}
                </td>
                <td>
                  {user.email}
                </td>
                <td>
                  <img src={user.avatar} className="user_icon"></img>
                </td>
                <td>
                  <a href="javaScript:void(0)" onClick={viewUserDetails.bind(this, user.id)}>View details / </a>
                  <a href="javaScript:void(0)" onClick={editUser.bind(this, user.id)}>Edit / </a>
                  <a href="javaScript:void(0)" onClick={deleteUser.bind(this, user.id)}>Delete</a>
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>)}
    </div>
  )
}

export default ListUserTableComponent