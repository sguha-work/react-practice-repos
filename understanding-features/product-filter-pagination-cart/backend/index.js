import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import Router from './router/router.js';
import Logger from './handlers/logger.handler.js';
import 'dotenv/config';
import StatusCode from './constants/status-codes.constant.js';
import upload from './middleware/upload.js';
const app = express();

// Define the port
const port = process.env.PORT || 3000;

// Enable CORS for cross-origin requests
app.use(cors());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.json());
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
let index = 0;
Object.keys(Router).forEach((method) => {
  Object.keys(Router[method]).forEach((path) => {
    Logger.log(`<${index}>  ${method}  http://localhost:${port}${path}`, 'warn');
    index += 1;
    (path.indexOf('upload') != -1 && method == 'post') && app[method](path, upload.single('file'), async (request, response) => {
      try {
        const result = await Router[method][path].bind({}, request, response, __dirname)();
      } catch (error) {
        Logger.log(JSON.stringify(error), 'error');
      }
    });
    (path.indexOf('upload') == -1) && app[method](path, async (request, response) => {
      try {
        const result = await Router[method][path].bind({}, request, response, __dirname)();
      } catch (error) {
        Logger.log(JSON.stringify(error), 'error');
      }
    })
  });
});


app.listen(port, () => console.log(`Server started on port ${port}`));