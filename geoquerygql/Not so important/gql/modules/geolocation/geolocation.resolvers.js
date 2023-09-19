import * as GeoLocation from './models/geolocation.model.js';
import DBService from './services/db.service.js';
const dbService = DBService.getInstance();
await dbService.connect();
const GeoLocationResolvers = {
    geolocations: async (args) => {
        const result = await GeoLocation.default.find();
        return result.map((dataChunk) => {
            return { ...dataChunk._doc };
        });
    },
    geolocationsbyname: async (args) => {
        let result;
        if (typeof args.name !== 'undefined') {
            result = await GeoLocation.default.find({ "name": args.name });
        } else {
            result = await GeoLocation.default.find();
        }
        return result.map((dataChunk) => {
            return { ...dataChunk._doc };
        });
    },
    insertGeoLocationDetail: async (args) => {
        const location = new GeoLocation.default({
            name: args.geolocationinput.name,
            latitude: args.geolocationinput.latitude,
            longitude: args.geolocationinput.longitude,
        });
        let result;
        try {
            result = await location.save();
        } catch (error) {
            console.error('Unable to save car info', error);
        }
        return { ...result._doc };
    }
}
export default GeoLocationResolvers;