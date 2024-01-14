import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/Home.page";
//import Layout from "./pages/Layout/Layout.page";
import Dashboard from "./pages/Dashboard/Dashboard.page";
import NoPage from "./pages/404/NoPage.page";
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Home />} key="index" />
        <Route exact path="home" element={<Home />} key="home" />
        <Route exact path="dashboard" element={<Dashboard />} key="dashboard" />
        <Route exact path="*" element={<NoPage />} key="nopage" />
      </Routes>
    </BrowserRouter>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);
export default App;
