import { useState } from 'react'
import { BrowserRouter, MemoryRouter, Link, Routes, Route } from 'react-router-dom';

import './App.css'
import HomePageComponent from './pages/home/Home.page.component';
import ListUserPageComponent from './pages/list-user/ListUser.page.component';
import UserDetailsPageComponent from './pages/user-details/UserDetails.page.component';
import AddUserPageComponent from './pages/add-user/AddUser.page.component';

function App() {

  return (
    <>
      <BrowserRouter>
        <div className="App">
          <table>
            <thead>
              <tr>
                <td>
                  <Link to="/user-list">User list page</Link>
                </td>
              </tr>
            </thead>
          </table>
        </div>
        <Routes>
          <Route path="" index element={<HomePageComponent></HomePageComponent>}></Route>
          <Route path="/user-list" element={<ListUserPageComponent></ListUserPageComponent>}></Route>
          <Route path="/user-details/:id" element={<UserDetailsPageComponent></UserDetailsPageComponent>}></Route>
          <Route path="/user-add" element={<AddUserPageComponent></AddUserPageComponent>}></Route>
          <Route path="/user-edit/:id" element={<AddUserPageComponent></AddUserPageComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
