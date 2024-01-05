import Ajv from "ajv";
import Logger from "../handlers/logger.handler.js";
class CommonController {
  instance = null;

  constructor() {
    this.handleRequest = this.handleRequest.bind(this);
  }

  static get CommonControllerInstance() {
    if (this.instance == null) {
      this.instance = new CommonController();
    }
    return this.instance;
  }

  #sendResponse(response, payload) {
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    response.status(payload.code || 200);
    const responsePayload = payload.payload !== undefined ? payload.payload : payload;
    if (responsePayload instanceof Object) {
      return response.json(responsePayload);
    } else {
      return response.end(responsePayload);
    }
  }

  #sendError(response, error) {
    Logger.log(error, 'error');
    response.setHeader('Access-Control-Allow-Origin', '*');
    response.setHeader('Access-Control-Allow-Credentials', 'true');
    let errorCode = 500;
    error instanceof Object && error.code && (errorCode = error.code);
    response.status(errorCode);
    if (error instanceof Object) {
      return response.json({ error: error.error || error.message, status: errorCode });
    } else {
      return response.json({ error: error, status: 500 });
    }
  }

  #collectRequestParams(request) {
    let requestParams = { ...request.params, ...request.query, ...request.body };
    try {
      if (request.body !== undefined) {
        if (
          request.headers &&
          request.headers["content-type"] === "application/json"
        ) {
          requestParams = { ...requestParams, ...request.body };
        } else if (
          request.headers &&
          typeof request.headers["content-type"] != "undefined" &&
          request.headers["content-type"].indexOf("multipart/form-data") !== -1
        ) {
          Object.keys(content["multipart/form-data"].schema.properties).forEach(
            (property) => {
              const propertyObject =
                content["multipart/form-data"].schema.properties[property];
              if (
                propertyObject.format !== undefined &&
                propertyObject.format === "binary"
              ) {
                requestParams[property] = this.collectFile(request, property);
              } else {
                requestParams[property] = request.body[property];
              }
            }
          );
        }
      }
    } catch (err) {
      Logger.log(err, 'error');
    }
    return requestParams;
  }

  async handleRequest(request, serviceOperation, response, validationSchema = null) {
    try {
      let serviceResponse;
      const consolidatedParams = this.#collectRequestParams(request);
      if (validationSchema) {
        const ajv = new Ajv();
        const validate = ajv.compile(validationSchema)
        if (!validate(consolidatedParams)) {
          return this.#sendError(response, validate.errors[0]);
        }
      }
      serviceResponse = await serviceOperation(consolidatedParams);
      return this.#sendResponse(response, serviceResponse);
    } catch (error) {
      return this.#sendError(response, error);
    }
  }
}
export default CommonController;
