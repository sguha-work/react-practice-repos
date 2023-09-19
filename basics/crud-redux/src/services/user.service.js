class User {
    async fetchUsers(pageIndex=1) {
        try {
            const dataStream = await fetch(`https://reqres.in/api/users?page=${pageIndex}`);
            const data = await dataStream.json();
            return Promise.resolve(data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
    async fetchUserDetails(id) {
        try {
            const dataStream = await fetch(`https://reqres.in/api/users/${id}`);
            const data = await dataStream.json();
            return Promise.resolve(data.data);
        } catch (error) {
            return Promise.reject(error);
        }
    }
}
const UserService = new User();
export default UserService;