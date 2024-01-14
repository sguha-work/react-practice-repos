import { createBrowserRouter } from "react-router-dom";
import CareerPageComponent from "./../components/pages/career.page.component";
import ChatPageComponent from './../components/pages/chat.page.component';
import ContactPageComponent from './../components/pages/contact.page.component';
import ServicePageComponent from './../components/pages/service.page.component';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <ChatPageComponent></ChatPageComponent>
    },
    {
        path: "/career",
        element: <CareerPageComponent />,
    },
    {
        path: "/contact",
        element: <ContactPageComponent />,
    },
    {
        path: "/service",
        element: <ServicePageComponent />,
    }
]);
export default routes;