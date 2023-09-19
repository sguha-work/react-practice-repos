export default interface Action {
    type: string;
    info: string;
    payload?: Array<any>|Object|any;
    error?: Object;
}