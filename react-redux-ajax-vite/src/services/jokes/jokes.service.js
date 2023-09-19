import Ajax from "../common/ajax.service";
import ACTION_JOKES from "../../store/Jokes/jokes.action";
import STORE_JOKES from "../../store/Jokes/jokes.store";
class JokesService {
    instance = null;
    ajaxInstance = Ajax.AjaxInstance;
    constructor() {
        this.getJokes = this.getJokes.bind(this);
        this.getCategories = this.getCategories.bind(this);
    }
    static get JokesServiceInstance() {
        if (this.instance == null) {
            this.instance = new JokesService();
        }
        return this.instance;
    }
    async getJokes(keyword = '', category = '') {
        let url = 'https://api.chucknorris.io/jokes/random';
        if (keyword.trim() != '') {
            url = `https://api.chucknorris.io/jokes/search?query=${keyword}`
        }
        if (category.trim() != '') {
            url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        }
        try {
            const data = this.ajaxInstance.get(url);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getCategories() {
        const url = 'https://api.chucknorris.io/jokes/categories';
        try {
            const data = await this.ajaxInstance.get(url);
            ACTION_JOKES.JOKES_CATEGORIES_FETCHED.data = data;
            STORE_JOKES.dispatch(ACTION_JOKES.JOKES_CATEGORIES_FETCHED);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }

    async getJokes(category) {
        const url = `https://api.chucknorris.io/jokes/random?category=${category}`;
        try {
            const data = await this.ajaxInstance.get(url);
            if(data.result) {
                ACTION_JOKES.JOKES_FETCHED.data = data.result;
            } else {
                ACTION_JOKES.JOKES_FETCHED.data = [data.value];
            }
            STORE_JOKES.dispatch(ACTION_JOKES.JOKES_FETCHED);
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
export default JokesService;