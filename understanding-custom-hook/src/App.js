import logo from './logo.svg';
import './App.css';
import MyCustomComponent1 from './components/MyCustomComponent1/MyCustomComponent1.component';
import MyCustomComponent2 from './components/MyCustomComponent2/MyCustomComponent2.component';

function App() {
  return (
    <div className="App">
      <MyCustomComponent1></MyCustomComponent1>
      <MyCustomComponent2></MyCustomComponent2>
    </div>
  );
}

export default App;
