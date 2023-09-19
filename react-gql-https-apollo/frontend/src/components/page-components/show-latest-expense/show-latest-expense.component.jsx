import ApolloClient from "../../../services/Apollo.service";
import { ApolloProvider } from '@apollo/react-hooks';
import TableComponent from "../../shared-components/table.component";
function ShowLatestExpenseComponent() {
  return (
    <>
      <h1>ShowLatestExpenseComponent</h1>
      <ApolloProvider client={ApolloClient}>
        <TableComponent />
      </ApolloProvider>
    </>
  )
}

export default ShowLatestExpenseComponent