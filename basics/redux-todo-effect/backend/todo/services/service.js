import DBService from "./db.service.js";
import model from "../models/model.js";
import { response } from "express";
class Service {
    static async get({page, limit}) {
        let connection;
        let response = {
            status: 200,
            data: []
        };
        try{
            connection = await DBService.connect();
            const dataFromDB = await DBService.get({model, page, limit})
            response.data = dataFromDB;
            return Promise.resolve(response);
        } catch(error) {
            response.status = 501;
            response.error = error;
            return Promise.reject(response);
        }
    }
    static async post({title, important}) {
        let response = {
            status: 201
        };
        let connection;
        try{
            console.log({title, important});
            const todo = new model({title, important})
            connection = await DBService.connect();
            DBService.post(todo);
            return Promise.resolve(response);
        } catch(error) {
            response.status = 501;
            response.error = error;
            return Promise.reject(response);
        } finally {
            await connection.close();
        }
    }
}
export default Service;