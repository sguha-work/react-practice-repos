import ApolloClient from './../../services/Apollo.service.js';
import { ApolloProvider } from '@apollo/react-hooks';
import LocationTable from '../LocationTable/LocationTable.component.js';
const LocationDisplay = (props) => (
    <ApolloProvider client={ApolloClient}>
        <LocationTable userName={props.userName}/>
    </ApolloProvider>
  );
   
  export default LocationDisplay;
  