class CommonService {
    instance = null;
    constructor() {
        this.instance = null;
    }
    static getInstance() {
        if (this.instance == null) {
            this.instance = new CommonService();
        }
        return this.instance;
    }
    get userName() {
        if (typeof localStorage.userName === 'undefined' || localStorage.userName === '') {
            return false;
        } else {
            return localStorage.userName;
        }
    }
    set userName(name = '') {
        localStorage.userName = name;
    }
}
export default CommonService;