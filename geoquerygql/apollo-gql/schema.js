import { gql } from 'apollo-server-express';
import GeoLocationSchema from './modules/geolocation/geolocation.schema.js';
const schema = gql(`${GeoLocationSchema}`);
export default schema;