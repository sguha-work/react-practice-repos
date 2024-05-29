import EventBusService from "./event-bus.service";
import Ajax from "./ajax.service";
export const getMenu = async ()=>{
    try {
        const data = await Ajax.get("http://localhost:3000/menu");console.log("service menu", data)
        EventBusService.dispatch("FETCH_MENU_SUCCESS",data);
        return Promise.resolve(data);
    } catch (e) {
        EventBusService.dispatch("FETCH_MENU_ERROR",e);
        return Promise.reject(e);
    }
}