class Server {
    instance = null;

    constructor() {
        this.login = this.login.bind(this);
    }

    static get ServerInstance() {
        if (this.instance == null) {
            this.instance = new Server();
        }
        return this.instance;
    }
    #awaitTimeout(delay) {
        return new Promise(resolve => setTimeout(resolve, delay));
    }
    #isValidateEmail(mail) {
        if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(mail)) {
            return true;
        }
        return false;
    }
    async login(id = null, password = null) {
        if (id && password) {
            if(this.#isValidateEmail(id)) {
                await this.#awaitTimeout(5000);
                if(id==='sguha1988.life@gmail.com'&&password=='abcd@1234') {
                    return Promise.resolve({status:200});
                } else {
                    return Promise.reject(new Error('User id or password is not valid'));        
                }
            } else {
                return Promise.reject(new Error('User id should be valid email'));    
            }
        } else {
            return Promise.reject(new Error('User id and password both fields are mandatory'));
        }
    }
}
export default Server;