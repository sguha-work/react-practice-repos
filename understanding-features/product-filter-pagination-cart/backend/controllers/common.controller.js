import Ajv from "ajv";
import Logger from "../handlers/logger.handler.js";
class CommonController {
  static instance = null;
  constructor() {
    if (CommonController.instance instanceof CommonController) {
      return CommonController.instance
    }
    CommonController.instance = this
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
    response.status(payload.status || 200);
    const responsePayload = payload.payload !== undefined ? payload.payload : payload;
    if (responsePayload instanceof Object) {
      response.json(responsePayload);
    } else {
      response.end(responsePayload);
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
      response.json({ error: error.error || error.message, status: errorCode });
    } else {
      response.json({ error: error, status: 500 });
    }
  }

  #collectRequestParams(request) {
    let requestParams = { ...request.params, ...request.query, ...request.body };
    if (request.file) {
      requestParams = { ...requestParams, file: request.file };
    }
    try {
      if (request.body !== undefined) {
        if (
          request.headers &&
          request.headers["content-type"] === "application/json"
        ) {
          requestParams = { ...requestParams, ...request.body };
        } //else if (
        //   request.headers &&
        //   typeof request.headers["content-type"] != "undefined" &&
        //   request.headers["content-type"].indexOf("multipart/form-data") !== -1 &&
        //   content!='undefined'
        // ) {
        //   Object.keys(content["multipart/form-data"].schema.properties).forEach(
        //     (property) => {
        //       const propertyObject =
        //         content["multipart/form-data"].schema.properties[property];
        //       if (
        //         propertyObject.format !== undefined &&
        //         propertyObject.format === "binary"
        //       ) {
        //         requestParams[property] = this.collectFile(request, property);
        //       } else {
        //         requestParams[property] = request.body[property];
        //       }
        //     }
        //   );
        // }
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
          this.#sendError(response, validate.errors[0]);
          return false;
        }
      }
      serviceResponse = await serviceOperation({ ...consolidatedParams, host: request.headers.host });
      this.#sendResponse(response, serviceResponse);
    } catch (error) {
      this.#sendError(response, error);
    }
  }
}
export default CommonController;
