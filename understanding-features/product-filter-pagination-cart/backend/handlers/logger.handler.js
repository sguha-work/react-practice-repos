class Logger {
    static log(message, type) {
        console[type](message);
    }
}
export default Logger;