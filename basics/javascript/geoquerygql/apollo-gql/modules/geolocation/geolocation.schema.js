

const GeoLocationSchema = `
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
    type Query {
        geolocations: [GeoLocation!]!,
        geolocationsbyname(name: String):[GeoLocation!]!
    }
    type Mutation {
        insertGeoLocationDetail(geolocationinput: GeoLocationInput): GeoLocation
    }
    type Subscription {
        geoLocationInserted: GeoLocation!,
        geoLocationInsertedForIndividual(name: String): GeoLocation!
    }
`;
export default GeoLocationSchema;