import express from 'express';
import https from 'https';
import fs from 'fs';
import { ApolloServer } from 'apollo-server-express';
import dotenv from 'dotenv';
import { SubscriptionServer } from 'subscriptions-transport-ws';
import { execute, subscribe } from 'graphql';
import { makeExecutableSchema } from '@graphql-tools/schema';
import schema from './schema.js';
import resolvers from './resolvers.js';

dotenv.config();
const executableSchema = makeExecutableSchema({
  typeDefs: schema,
  resolvers: resolvers
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
    schema:executableSchema,
    execute,
    subscribe
  }, {
    server: httpsServer,
    path: '/geoloc'
  });

  const apolloServer = new ApolloServer({
    typeDefs: schema,
    resolvers: resolvers,
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