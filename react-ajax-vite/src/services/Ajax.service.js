export class Ajax {
    // instance = null;
    // constructor() {

    // }
    // static get instance() {
    //     if(this.instance==null) {
    //         this.instance = new Ajax();
    //     }
    // }
    async getData() {
        try {
            const data = await fetch('https://api.chucknorris.io/jokes/random');
            return Promise.resolve(data.json());
        } catch(error) {
            return Promise.reject(data);
        }
    }
}