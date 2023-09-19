import * as GeoLocation from './models/geolocation.model.js';
import { PubSub } from 'graphql-subscriptions';
const pubsub = new PubSub();
import DBService from './services/db.service.js';
const dbService = DBService.getInstance();
await dbService.connect();
const GeoLocationResolvers = {
    Query: {
        geolocations: async () => {
            const result = await GeoLocation.default.find();
            return result.map((dataChunk) => {
                return { ...dataChunk._doc };
            });
        },
        geolocationsbyname: async (parent, args, context, info) => {
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
    },
    Mutation: {
        insertGeoLocationDetail: async (parent, args, context, info) => {
            const location = new GeoLocation.default({
                name: args.geolocationinput.name,
                latitude: args.geolocationinput.latitude,
                longitude: args.geolocationinput.longitude,
            });
            let result;
            try {
                result = await location.save();
                pubsub.publish('GEOLOCATION_INSERTED', {
                    geoLocationInserted: result
                });
                pubsub.publish('GEOLOCATION_INSERTED_FOR_'+args.geolocationinput.name, {
                    geoLocationInsertedForIndividual: result
                });
            } catch (error) {
                console.error('Unable to save location info', error);
            }
            return { ...result._doc };
        }
    },
    Subscription: {
        geoLocationInserted: {
            subscribe: () => {
                return pubsub.asyncIterator('GEOLOCATION_INSERTED');
            }
        },
        geoLocationInsertedForIndividual: {
            subscribe: (parent, args, context, info) => {
                return pubsub.asyncIterator('GEOLOCATION_INSERTED_FOR_'+args.name);
            }
        }
    }
};
export default GeoLocationResolvers;