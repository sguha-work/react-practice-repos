import STORE from "../../store/store";
import ACTION_STOCK from "../../store/actions/stock.action";
export default function BuyStock() {
    const buyStock = ()=>{
        STORE.dispatch(ACTION_STOCK.BUY_STOCK);
    }
    return (
        <>
            <button id="btn_buyStock" onClick={buyStock}>Buy Stock</button>
        </>
    );
}