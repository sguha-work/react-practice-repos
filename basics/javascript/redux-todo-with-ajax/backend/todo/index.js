import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import Router from './router/router.js';
import Logger from './handlers/logger.handler.js';
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
let index = 0;
Object.keys(Router).forEach((method) => {
  Object.keys(Router[method]).forEach((path) => {
    Logger.log(`<${index}>  ${method.toUpperCase()}  http://localhost:${port}${path}`, 'warn');
    index += 1;
    app[method](path, async (request, response) => {
      try {
        return await Router[method][path](request, response);
      } catch (error) {
        Logger.log(JSON.stringify(error), 'error');
        return error;
      }
    })
  });

});


app.listen(port, () => console.log(`Server started on port ${port}`));