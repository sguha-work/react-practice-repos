import { Footer } from './components/Footer';
import { Main } from './components/Main';
import { Header } from './components/Header';
import { Loading } from './components/Loading';
import './App.css';

function App() {
  // inside the below () everything is jsx template
  return (
    <>
      <Loading     />
      <Header     />
      <Main     />
      <Footer     />
    </>
  );
}

export default App;
