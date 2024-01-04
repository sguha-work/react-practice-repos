import Controller from "../controllers/controller.js"
const Router = {
    'post': {
        '/todo': (request, response)=>Controller.post(request, response)
    },
    'get': {
        '/todo': (request, response)=>Controller.get(request, response)
    }
    
}
export default Router;