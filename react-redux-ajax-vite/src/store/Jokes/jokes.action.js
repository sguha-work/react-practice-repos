const FETCH_JOKES_CATEGORIES = {
    type: "FETCH_JOKES_CATEGORIES",
    info: "This action is for fetching jokes categories"
}

const JOKES_CATEGORIES_FETCHED = {
    type: "JOKES_CATEGORIES_FETCHED",
    info: "This action is for notifying that fetching categories are done",
    data:[]
}

const FETCH_JOKES = {
    type: "FETCH_JOKES",
    info: "This action is for fetching jokes",
    category: ''
}

const JOKES_FETCHED = {
    type: "JOKES_FETCHED",
    info: "This action is for fetching jokes",
    data:[]
}

const ACTION_JOKES = {
    FETCH_JOKES_CATEGORIES,
    JOKES_CATEGORIES_FETCHED,
    FETCH_JOKES,
    JOKES_FETCHED
}

export default ACTION_JOKES;