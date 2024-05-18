import Ajax from "./ajax.service";
import EventBusService from "./event-bus.service";
class Service {
    async getProduct() {
        try {
            const data = await Ajax.get("http://localhost:3000/fruit/all");console.log("data",data);
            EventBusService.dispatch("Fetch-organic-product-success",data.data);
            return Promise.resolve(data);
        } catch (e) {
            EventBusService.dispatch("Fetch-organic-product-error",e);
            return Promise.reject(e);
        }
    }
}
const OurOrganicProduct = new Service();
export default OurOrganicProduct;