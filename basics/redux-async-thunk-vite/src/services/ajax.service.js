export default class Ajax {
    async get(url) {
        try {
            const response = await fetch(url,{
                method: 'GET',
                mode: 'cors',
                headers: {
                  'Content-Type': 'application/json'
                } 
            });
            return Promise.resolve(response.json());
        } catch (error) {
            return Promise.reject(error);
        }
    }
}