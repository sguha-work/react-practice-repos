import { createBrowserRouter } from "react-router-dom";
import HomePageComponent from "../components/pages/home.page.component";
const routes = createBrowserRouter([
    {
        path: "/",
        element:<HomePageComponent></HomePageComponent>
    }
]);
export default routes;