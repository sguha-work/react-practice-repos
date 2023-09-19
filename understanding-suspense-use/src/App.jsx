import DogTypeListSimpleAjaxComponent from "./components/simple-ajax/simple-ajax.component"
import './App.css';
import DogTypeListUsingUseSuspenseComponent from "./components/ajax-using-use/ajax-using-use.component";
function App() {
  return (
    <>
     <DogTypeListSimpleAjaxComponent></DogTypeListSimpleAjaxComponent>
     <DogTypeListUsingUseSuspenseComponent></DogTypeListUsingUseSuspenseComponent>
    </>
  )
}

export default App
