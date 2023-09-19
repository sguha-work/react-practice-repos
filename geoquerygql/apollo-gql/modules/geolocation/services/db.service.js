import dotenv from 'dotenv';
import mongoose from 'mongoose';
class DBService {
    #connectionString = '';
    instance = null;
    constructor() {
        if(typeof process.env.DB_USER==='undefined') {
            dotenv.config();
        }
        this.#connectionString = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@${process.env.DB_URL}/db_locationApp?retryWrites=true&w=majority`;
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new DBService();
        }
        return this.instance;
    }
    async connect() {
        try {
            await mongoose.connect(this.#connectionString);
            console.log('Database connection established');
        } catch (error) {
            console.error('Unable to connect to database ', error);
        }
    }
}
export default DBService;