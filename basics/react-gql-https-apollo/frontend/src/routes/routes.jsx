import { createBrowserRouter } from "react-router-dom";

import AddExpenseComponent from './../components/page-components/add-expense/add-expense.component';
import ShowLatestExpenseComponent from "../components/page-components/show-latest-expense/show-latest-expense.component";
import ListExpenseComponent from "../components/page-components/list-expense/list-expense.component";
const routes = createBrowserRouter([
  {
    path: "/expense/add",
    element: <AddExpenseComponent />,
  },
  {
    path: "/expense/show-latest",
    element: <ShowLatestExpenseComponent/>,
  },
  {
    path: "/expense/list",
    element: <ListExpenseComponent/>,
  }
]);
export default routes;