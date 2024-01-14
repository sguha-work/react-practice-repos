import logo from './logo.svg';
import './App.css';
import DemoComponent from './components/DemoComponent/DemoComponent';
import ReportList from './components/ReportComponent/ReportList';
function App() {
  return (
    <div className="App">
      <h1>This is app component</h1>
      {/* <DemoComponent></DemoComponent> */}
      <ReportList></ReportList>
    </div>
  );
}

export default App;
