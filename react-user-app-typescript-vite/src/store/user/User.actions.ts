import Action from "../../interfaces/action.interface";
const FETCH_USERS: Action = {
    type: "FETH_USERS",
    info: "This action is for fetching list of users"
}

const FETCH_USERS_COMPLETE: Action = {
    type: "FETH_USERS_COMPLETE",
    info: "This action will be dispatched when user data is fetched"
}

const FETCH_USER_DETAILS: Action = {
    type:"FETCH_USER_DETAILS",
    info: "This action will be dispatched to fetch user details by id"
}

const FETCH_USER_DETAILS_COMPLETE: Action = {
    type:"FETCH_USER_DETAILS_COMPLETE",
    info: "This action will be dispatched when fetching user details is complete"
}
const USER_ACTIONS = {
    FETCH_USERS,
    FETCH_USERS_COMPLETE,
    FETCH_USER_DETAILS,
    FETCH_USER_DETAILS_COMPLETE
}
export default USER_ACTIONS;