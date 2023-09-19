import mongoose from "mongoose";
const mongoUrl = `mongodb+srv://angshu_mongo:HhWjjsZoi1wDqZkj@cluster0.1f9ag.mongodb.net/?retryWrites=true&w=majority`;
class Dbconn {
    __db = null;
    constructor() {

    }
    async connectMongo() {
        try {
            const options = {
                maxPoolSize: 10,
                dbName: 'ssDevDB'
            }
            await mongoose.connect(mongoUrl, options);;
            this.__db = mongoose.connection;
            console.log("Connected to database successfully");
            return Promise.resolve();
        } catch (error) {
            console.error("Failed to estublish DB Connection", error);
            return Promise.reject(error);
        }
    }

    async disconnectMongo(connection) {
        try {
            if (this.__db != null) {
                this.__db.close();
                return Promise.resolve();
            }
        } catch (error) {
            console.error("Failed to disconnect DB Connection", error);
            return Promise.reject(error);
        }
    }
}
const db = new Dbconn();
export default db;