class Ajax {
    public async get(url: string): Promise<Array<Object>> {
        try {
            const data = await fetch(url);
            return Promise.resolve(data.json());
        } catch(error) {
            return Promise.reject(error);
        }
    }
}
const AjaxService = new Ajax();
export default AjaxService;