import Action from "../../interfaces/action.interface";
import UserService from "../../services/User.service";
import USER_ACTIONS from "./User.actions";

const initialState = {
    users: []
}

export default function USER_REDUCERS(state = initialState, action: Action) {
    //@ts-ignore
    if (action.type.type) {
        //@ts-ignore
        action.type = action.type.type;
    }
    switch (action.type) {
        case USER_ACTIONS.FETCH_USERS.type:
            UserService.fetchUsers();
            return {
                ...state,
                users: []
            }
            break;
        case USER_ACTIONS.FETCH_USERS_COMPLETE.type:
            return {
                ...state,
                users: action.payload
            }
            break;
        case USER_ACTIONS.FETCH_USER_DETAILS.type:
            UserService.fetchUserDetails(action.payload?.id);
            return {
                ...state,
                userDetails: null
            }
            break;
        case USER_ACTIONS.FETCH_USER_DETAILS_COMPLETE.type:
            return {
                ...state,
                userDetails: action.payload
            }
            break;
        default:
            return state;
    }
}