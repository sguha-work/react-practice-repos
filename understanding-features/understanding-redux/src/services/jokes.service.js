export const fetchJokeCategory = async () => {
    try {
        const stream = await fetch("https://api.chucknorris.io/jokes/categories");
        const data = await stream.json();
        return Promise.resolve(data);
    } catch (error) {
        return Promise.reject(error);
    }
}
export const fetchJokes = async(category)=>{
    try {
        const stream = await fetch(`https://api.chucknorris.io/jokes/random?category=${category}`);
        const data = await stream.json();
        return Promise.resolve(data.value);
    } catch (error) {
        return Promise.reject(error);
    }
}