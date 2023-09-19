(() => {
    const reduxToolkit = reduxjstoolkit;
    const createStore = reduxToolkit.configureStore;

    const initialState = {
        numberOfStocks: 0
    }

    const action = {
        BUY_STOCK: "BUY_STOCK",
        SELL_STOCK: "SELL_STOCK"
    }
    function reducer(state=initialState, action) {
        switch(action.type) {
            case action.BUY_STOCK:
                return {
                    ...state,
                    numberOfStocks: state.numberOfStocks + 1
                }
                break;
            case action.SELL_STOCK:
                return {
                    ...state,
                    numberOfStocks: state.numberOfStocks + 1
                }
                break;
            default:
                return state;
        }
    }
    const store = createStore(reducer);

    function buyStock() {

    }
    function sellStock() {

    }
    function displayNumberOfAvailableStock() {
        const numberOfStocks = store.getState();
        document.getElementById('numberOfStocks').innerText = numberOfStocks;
    }
    (() => {
        // binding events
        document.getElementById('btn_buyStock').addEventListener('click', buyStock);
        document.getElementById('btn_sellStock').addEventListener('click', sellStock);
    })()
})();