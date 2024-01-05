export default class TodoService {
    static async getTodo({ page, limit }) {
        try {
            const url = `http://localhost:3000/todo?page=${page}&limit=${limit}`;
            const stream = await fetch(url);
            const data = await stream.json();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    
}
