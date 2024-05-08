class AjaxClass {
    async get(url) {
        try {
            if (sessionStorage[url]) {
                return Promise.resolve(JSON.parse(sessionStorage[url]));
            } else {
                const stream = await fetch(url);
                const data = await stream.json();
                sessionStorage[url] = JSON.stringify(data);
                return Promise.resolve(data);
            }
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
const Ajax = new AjaxClass();
export default Ajax;