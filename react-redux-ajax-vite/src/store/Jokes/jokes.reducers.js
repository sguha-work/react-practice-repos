import ACTION_JOKES from "./jokes.action";
import JokesService from "../../services/jokes/jokes.service";
// this is the initial value of stocks.
const initialState = {
    jokeCategories: [],
    jokeKeyWord:'',
    jokes:[]
}

function REDUCER_JOKES(state = initialState, action) {
    let jokesServiceInstance = JokesService.JokesServiceInstance;
    switch (action.type) {
        case ACTION_JOKES.FETCH_JOKES_CATEGORIES.type:
            jokesServiceInstance.getCategories();
            return {
                ...state,
                jokeCategories: []
            }
        case ACTION_JOKES.JOKES_CATEGORIES_FETCHED.type:
            return {
                ...state,
                jokeCategories:action.data
            }
        case ACTION_JOKES.FETCH_JOKES.type:
            jokesServiceInstance.getJokes(ACTION_JOKES.FETCH_JOKES.category);
            return {
                ...state,
                jokes: []
            }
        case ACTION_JOKES.JOKES_FETCHED.type:
            return {
                ...state,
                jokes: action.data
            }
        default:
            return state;
    }
}
export default REDUCER_JOKES;