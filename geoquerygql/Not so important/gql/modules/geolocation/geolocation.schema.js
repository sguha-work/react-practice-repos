import { buildSchema } from 'graphql';
const GeoLocationSchema = buildSchema(`
        type GeoLocation {
            _id: ID!
            name: String!
            latitude: Float!
            longitude: Float!
            createdAt: Float!
        }
        input GeoLocationInput {
            name: String!
            latitude: Float!
            longitude: Float!
        }
        type RootQuery {
            geolocations: [GeoLocation!]!,
            geolocationsbyname(name: String):[GeoLocation!]!
        }
        type RootMutation {
            insertGeoLocationDetail(geolocationinput: GeoLocationInput): GeoLocation
        }
        schema {
            query: RootQuery
            mutation: RootMutation
        }
    `);
export default GeoLocationSchema;