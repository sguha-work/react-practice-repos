import express from 'express';
import bodyParser from 'body-parser';
import { graphqlHTTP } from 'express-graphql';
import dotenv from 'dotenv';
import https from 'https';
import fs from 'fs';
import cors from "cors";
import GeoLocationSchema from './modules/geolocation/geolocation.schema.js';
import GeoLocationResolvers from './modules/geolocation/geolocation.resolvers.js';

dotenv.config();
const app = express();
app.use(bodyParser.json());
app.use(
    cors({
        origin: "*"
    })
);

// setting up geoloc endpoint for module geolocation
app.use('/geoloc', graphqlHTTP({
    schema: GeoLocationSchema,
    rootValue: GeoLocationResolvers,
    graphiql: true
}));

(async () => {
    https.createServer({
        key: fs.readFileSync("./key.pem"),
        cert: fs.readFileSync("./cert.pem"),
        requestCert: false,
        rejectUnauthorized: false,
    }, app).listen(3005, function () {
        console.log(`Successfully started server: https://localhost:3005`);
    });
})();

/**
 * Example mutation
 * 
 mutation {
  insertGeoLocationDetail(geolocationinput:{
    name:"Angshu",
    latitude:10.009,
    longitude:11.234
  }) {
    _id
    name
    latitude
    longitude
    createdAt
  }
}
// fetching all
query {
  geolocations {
    _id
    name
    latitude
    longitude
    createdAt
  }
}
// fetch by name
query {
  geolocationsbyname(name:"Angshu") {
    _id
    name
    latitude
    longitude
    createdAt
  }
}
 */