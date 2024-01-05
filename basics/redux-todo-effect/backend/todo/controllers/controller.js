import CommonController from './common.controller.js';
import Service from '../services/service.js';
import {GetValidatorSchema} from '../schemas/validator.schema.js';
const commonController = CommonController.CommonControllerInstance;

class Controller {
  static async get(request, response) {
    return await commonController.handleRequest(request, Service.get, response, GetValidatorSchema);
  };
  static async delete(request, response) {
    return await commonController.handleRequest(request, Service.delete, response);
  };
  static async post(request, response) {
    return await commonController.handleRequest(request, Service.post, response);
  };
}
export default Controller;
