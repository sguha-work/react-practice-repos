import express from 'express';
import https from 'https';
import fs from 'fs';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
dotenv.config();



import GeoLocationSchema from './modules/geolocation/geolocation.schema.js';
import GeoLocationResolvers from './modules/geolocation/geolocation.resolvers.js';

const schema = makeExecutableSchema({
  typeDefs: GeoLocationSchema,
  resolvers: GeoLocationResolvers
});
const port = process.env.PORT || 3005;
const startServer = async () => {
  const app = express();
  const httpsServer = https.createServer({
    key: fs.readFileSync('key.pem'),
    cert: fs.readFileSync('cert.pem')
  }, app).listen(port, () => {
    console.log(`Server listning to port ${port}`);
  });
  const subscriptionServer = SubscriptionServer.create({
    schema,
    execute,
    subscribe
  }, {
    server: httpsServer,
    path: '/geoloc'
  });

  const apolloServer = new ApolloServer({
    typeDefs: GeoLocationSchema,
    resolvers: GeoLocationResolvers,
    plugins: [{
      async serverWillStart() {
        return {
          async drainServer() {
            subscriptionServer.close();
          }
        }
      }
    }]
  });
  await apolloServer.start();
  apolloServer.applyMiddleware({ app: app, path: "/geoloc" });
};
startServer();
/**
 * sample queries
 * 
 * query
 * All
 {"query": "query {  geolocations {    _id    name    latitude    longitude    createdAt  }}"}
 * By name
 {"query":"query {  geolocationsbyname(name:\"Angshu\") {    _id    name    latitude    longitude    createdAt  }}"}
 *
 * mutation
 mutation {
  insertGeoLocationDetail(geolocationinput:{
    name:"Angshu",
    latitude:30.009,
    longitude:31.234
  }) {
    _id
    name
    latitude
    longitude
    createdAt
  }
}

{"query":"mutation {    insertGeoLocationDetail(geolocationinput:{      name:\"Angshu\",      latitude:30.009,      longitude:31.234    }) {      _id      name      latitude      longitude      createdAt    }  }"}

 * subscription
 subscription GeoLocationInserted {
  geoLocationInserted {
    _id
    name
    latitude
    longitude
    createdAt
  }
}

subscription GeoLocationInsertedForIndividual($name: String) {
  geoLocationInsertedForIndividual(name: $name) {
    _id
    createdAt
    latitude
    longitude
    name
  }
}
 */