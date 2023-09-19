import logo from './logo.svg';
import './App.css';
import NumberOfStocks from './components/NumberOfStocks/NumberOfStocks.component';
import BuyStock from './components/BuyStock/BuyStock.component';
import SellStock from './components/SellStock/SellStock.component';

function App() {
  return (
    <div className="App">
      <h1>This is a basic example of redux</h1>
      <NumberOfStocks></NumberOfStocks>
      <BuyStock></BuyStock>
      <SellStock></SellStock>
    </div>
  );
}

export default App;
