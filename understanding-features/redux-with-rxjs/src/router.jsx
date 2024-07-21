import { createBrowserRouter } from "react-router-dom";
import HomePageComponent from "./components/pages/home.page.component";
import AboutPageComponent from "./components/pages/about.page.component";
const routes = createBrowserRouter([
    {
        path:"/",
        element: <HomePageComponent></HomePageComponent>
    },
    {
        path: "/about",
        element: <AboutPageComponent></AboutPageComponent>
    }
])
export default routes;