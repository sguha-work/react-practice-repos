import mongoose from 'mongoose';
class DBService {
    constructor() {
        this.db = null;
    }
    connectionString(dbName = 'test') {
        return `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/${dbName}`
    }

    static async connect(DBName) {

        try {
            await mongoose.connect(this.connectionString(DBName)); // await on a step makes process to wait until it's done/ err'd out.
            this.db = mongoose.connection;
            return Promise.resolve(this.db);
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
}
export default DBService;