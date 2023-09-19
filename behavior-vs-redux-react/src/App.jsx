
import './App.css'
import BehaviorButtonComponent from './behavior-demo/components/behavior-button-component/behavior-button.component'
import BehaviorCounterComponent from './behavior-demo/components/behavior-counter-component/behavior-counter.component'
import ReduxButtonCompoent from './redux-demo/components/redux-button-component/redux-button.component'
import ReduxCounterCompoent from './redux-demo/components/redux-counter-component/redux-counter.component'

function App() {

  return (
    <>
      <div>
        <h2>Demo with increasing counter example</h2>
        <div className="behavior-demo">
          <h3>Behavior demo</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <BehaviorButtonComponent></BehaviorButtonComponent>
                </td>
                <td>
                  <BehaviorCounterComponent></BehaviorCounterComponent>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="redux-demo">
          <h3>Redux demo</h3>
          <table>
            <tbody>
              <tr>
                <td>
                  <ReduxButtonCompoent></ReduxButtonCompoent>
                </td>
                <td>
                  <ReduxCounterCompoent></ReduxCounterCompoent>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </>
  )
}

export default App
