
import './App.css'
import GeneratorAjaxComponent from './components/generator-ajax-component/Genarator-ajax.component'
import NormalAjaxComponent from './components/normal-ajax-component/Normal-ajax.component'
import NormalAjax2Component from './components/normal-ajax-component2/Normal-ajax2.component'

function App() {

  return (
    <>
      <NormalAjaxComponent></NormalAjaxComponent>
      <NormalAjax2Component></NormalAjax2Component>
      <GeneratorAjaxComponent></GeneratorAjaxComponent>
    </>
  )
}

export default App
