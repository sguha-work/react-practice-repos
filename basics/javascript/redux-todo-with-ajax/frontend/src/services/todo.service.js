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
    static async addTodo({ title, important }) {
        try {
            const url = `http://localhost:3000/todo`;
            const stream = await fetch(url, {
                method: "POST",
                body: JSON.stringify({
                    title,
                    important
                }),
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const data = await stream.json();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    static async deleteTodo({ id }) {
        try {
            const url = `http://localhost:3000/todo/${id}`;
            const stream = await fetch(url, {
                method: "DELETE",
                headers: {
                    "Content-type": "application/json; charset=UTF-8"
                }
            });
            const data = await stream.json();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
