class Ajax {
    instance = null;

    constructor() {
        this.get = this.get.bind(this);
    }

    static get AjaxInstance() {
        if (this.instance == null) {
            this.instance = new Ajax();
        }
        return this.instance;
    }
    async get(url) {
        try {
            const data = await fetch(url);
            return Promise.resolve(data.json());
        } catch (error) {
            console.error(error);
            return Promise.reject(error);
        }
    }
}
export default Ajax;