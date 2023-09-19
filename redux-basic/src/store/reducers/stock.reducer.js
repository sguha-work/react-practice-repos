import ACTION_STOCK from './../actions/stock.action';
const initialState = {
    numberOfStocks: 0
}
function REDUCER_STOCK(state=initialState, action) {
    switch(action.type) {
        case ACTION_STOCK.BUY_STOCK.type:
            return {
                ...state,
                numberOfStocks: state.numberOfStocks + 1
            }
        case ACTION_STOCK.SELL_STOCK.type:
            return {
                ...state,
                numberOfStocks: state.numberOfStocks - 1
            }
        default:
            return state;
    }
}
export default REDUCER_STOCK;