import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Page1PageComponent from './pages/page1/page1.page-component';
import Page2PageComponent from './pages/page2/page2.page-component';
import Page3PageComponent from './pages/page3/page3.page-component';
import './App.css';

function App() {

  return (
    <>
      <BrowserRouter>
        <ul>
          <li>
            <Link to="/page1">Page 1</Link>
          </li>
          <li>
            <Link to="/page2">Page 2</Link>
          </li>
          <li>
            <Link to="/page3">Page 3</Link>
          </li>
        </ul>
        <Routes>
          <Route path="" index element={<Page1PageComponent></Page1PageComponent>}></Route>
          <Route path="/page2" element={<Page2PageComponent></Page2PageComponent>}></Route>
          <Route path="/page3" element={<Page3PageComponent></Page3PageComponent>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
