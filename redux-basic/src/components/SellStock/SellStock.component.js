import STORE from "../../store/store";
import ACTION_STOCK from "../../store/actions/stock.action";
export default function SellStock() {
    const sellStock = ()=>{
        STORE.dispatch(ACTION_STOCK.SELL_STOCK);
    }
    return (
        <>
            <button id="btn_sellStock" onClick={sellStock}>Sell Stock</button>
        </>
    );
}