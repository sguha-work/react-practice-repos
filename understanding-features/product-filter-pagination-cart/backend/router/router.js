import Controller from "../controllers/controller.js";
const controller = new Controller();
const Router = {
    'post': {
    },
    'get': {
        '/fruit/all': (request, response) => {
            try {
                controller.getAllFruits(request, response);
            } catch (e) {
                console.log("Error in router", e);
            }
        },
    }

}
export default Router;