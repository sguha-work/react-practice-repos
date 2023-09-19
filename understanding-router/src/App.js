import { BrowserRouter, MemoryRouter, Link, Routes, Route } from 'react-router-dom';
import AboutPageComponent from './pages/about/about.page.component';
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
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <Routes>
          <Route path="" index element={<HomePageComponent></HomePageComponent>}></Route>
          <Route path="/about" element={<AboutPageComponent></AboutPageComponent>}></Route>
          <Route path="/login" element={<LoginPageComponent></LoginPageComponent>}></Route>
          <Route path="/profile" element={<ProfilePageComponent></ProfilePageComponent>}></Route>
          <Route path="/profile/:email" element={<ProfilePageComponent></ProfilePageComponent>}></Route>
        </Routes>
      </BrowserRouter>
      {/* <MemoryRouter>
        <Routes>
          <Route path="/profile/:email" element={<ProfilePageComponent></ProfilePageComponent>}></Route>
        </Routes>
      </MemoryRouter> */}
    </>
  );
}

export default App;
