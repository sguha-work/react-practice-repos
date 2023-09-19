import GeoLocationResolvers from "./modules/geolocation/geolocation.resolvers.js"
const resolvers = {
    Query:{...GeoLocationResolvers.Query},
    Mutation:{...GeoLocationResolvers.Mutation},
    Subscription:{...GeoLocationResolvers.Subscription}
}
export default resolvers;