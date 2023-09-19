
import './App.css'
import InputComponent from './components/shared/input.component'
import LabelComponent from './components/shared/label.component'
import ErrorBoundary from './components/utils/error-boundary.component'
function App() {

  return (
    <ErrorBoundary>
      <InputComponent type="text" title="abcd"></InputComponent>
      <InputComponent type="number" title="1234"></InputComponent>
      <LabelComponent text=""></LabelComponent>
    </ErrorBoundary>
  )
}

export default App
