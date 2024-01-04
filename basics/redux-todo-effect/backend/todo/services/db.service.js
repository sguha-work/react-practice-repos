import mongoose from 'mongoose';
class DBService {
    constructor() {
    }
    static connectionString(dbName = 'tododb') {
        //mongodb+srv://angshu_mongo:HhWjjsZoi1wDqZkj@cluster0.1f9ag.mongodb.net/bwUsers?authSource=admin&replicaSet=atlas-gfk4y7-shard-0&readPreference=primary&ssl=true
        return `mongodb+srv://angshu_mongo:HhWjjsZoi1wDqZkj@cluster0.1f9ag.mongodb.net/${dbName}?authSource=admin&replicaSet=atlas-gfk4y7-shard-0&readPreference=primary&ssl=true`
    }

    static async connect(dbName = 'tododb') {
        try {
            await mongoose.connect(DBService.connectionString(dbName));
            const db = mongoose.connection;
            return Promise.resolve(db);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    static async disConnect(obj) {
        try {
            await this.db.close();
            return Promise.resolve(true);
        } catch (error) {
            console.log('db connection close error-->', error);
            return Promise.reject();
        }
    }

    static async get({model, query, projection, sort, limit, page}) {
        if (
            typeof model.find === "undefined" ||
            typeof model.find !== "function"
        ) {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                // await mongoose.connect(defaultConnectionString(DBName), { useNewUrlParser: true }); // await on a step makes process to wait until it's done/ err'd out.
                // db = mongoose.connection;
                projection = projection || {};
                const skip = limit * page;
                const dbResp = await model.find(query).select(projection).sort(sort).skip(skip).limit(limit);console.log({dbResp});
                return Promise.resolve(dbResp);
            } catch (error) {
                console.log(error);
                return Promise.reject({ message: error.message, status: 500 });
            }
        }
    }
    static async post(dataModel) {
        if (
            typeof dataModel.save === "undefined" ||
            typeof dataModel.save !== "function"
        ) {
            return Promise.reject({
                message: "Not a valid data model",
            });
        } else {
            try {
                let dbResp = await dataModel.save();
                return Promise.resolve(dbResp);
            } catch (err) {
                console.log("Save err", err.toString());
                return Promise.reject({
                    message: err.message,
                    status: err.code === 11000 ? 409 : 500,
                });
            }
        }
    }

}
export default DBService;