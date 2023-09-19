import { BrowserRouter, Link, Routes, Route } from 'react-router-dom';
import LoginPageComponent from './pages/login/login.page.component';
import HomePageComponent from './pages/home/home.page.component';
import ProfilePageComponent from './pages/profile/profile.page.component';
function App() {


  return (
    <>
      <BrowserRouter>
        <div className="App">
          <ul>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="" index element={<HomePageComponent></HomePageComponent>}></Route>
          <Route path="/login" element={<LoginPageComponent title="Login"></LoginPageComponent>}></Route>
          <Route path="/profile" element={<ProfilePageComponent title="Profile"></ProfilePageComponent>}></Route>
          <Route  path="/profile/:id" element={<ProfilePageComponent title="Profile"></ProfilePageComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
