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
    parseJwt(token) {
        var base64Url = token.split('.')[1];
        var base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
        var jsonPayload = decodeURIComponent(window.atob(base64).split('').map(function (c) {
            return '%' + ('00' + c.charCodeAt(0).toString(16)).slice(-2);
        }).join(''));

        return JSON.parse(jsonPayload);
    }
    async login(id = null, password = null) {
        if (id && password) {
            if (this.#isValidateEmail(id)) {
                const loginAPI = 'http://localhost:1000/auth/login';
                const response = await fetch(loginAPI, {
                    method: 'POST', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-url
                    body: JSON.stringify({ email: id, password }) // body data type must match "Content-Type" header
                });
                return response.json();
            } else {
                return Promise.reject(new Error('User id should be valid email'));
            }
        } else {
            return Promise.reject(new Error('User id and password both fields are mandatory'));
        }
    }

    async getProfileDetails(id = null, token=null) {console.log('token',token);
        if (id && token) {
            try {
                const profileAPI = `http://localhost:1000/profile/${id}`;
                const response = await fetch(profileAPI, {
                    method: 'GET', // *GET, POST, PUT, DELETE, etc.
                    mode: 'cors', // no-cors, *cors, same-origin
                    cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
                    headers: {
                        'Content-Type': 'application/json',
                        'Authorization': `Bearer ${token}`
                    }
                });
                return response.json();
            } catch (error) {
                return Promise.reject(error);
            }
        } else {
            return Promise.reject(new Error('Profile id is required to fetch profile details'));
        }
    }
}
export default Server;