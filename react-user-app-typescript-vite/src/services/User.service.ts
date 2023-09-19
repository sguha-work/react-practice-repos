import USER_ACTIONS from "../store/user/User.actions";
import USERS_STORE from "../store/user/User.store";
import AjaxService from "./Ajax.service";

class UserServiceClass {
    public async fetchUsers() {
        try {
            const data = await AjaxService.get('https://jsonplaceholder.typicode.com/users');
            USERS_STORE.dispatch((dispatch) => {
                dispatch({ type: USER_ACTIONS.FETCH_USERS_COMPLETE, payload: data, error: null });
            });
        } catch(error) {
            USERS_STORE.dispatch((dispatch) => {
                dispatch({ type: USER_ACTIONS.FETCH_USERS_COMPLETE, payload: null, error });
            });
        }
    }
    public async fetchUserDetails(id: string){
        try {
            const data = await AjaxService.get(`https://jsonplaceholder.typicode.com/users/${id}`);
            USERS_STORE.dispatch((dispatch) => {
                dispatch({ type: USER_ACTIONS.FETCH_USER_DETAILS_COMPLETE, payload: data, error: null });
            });
        } catch(error) {
            USERS_STORE.dispatch((dispatch) => {
                dispatch({ type: USER_ACTIONS.FETCH_USER_DETAILS_COMPLETE, payload: null, error });
            });
        }
    }
}
const UserService = new UserServiceClass();
export default UserService;