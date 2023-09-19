import TaskContext from "./contexts/task.context";
import MyComponent1 from "./components/MyComponent1/MyComponent1.component";
import MyComponent2 from "./components/MyComponent2/MyComponent2.component";
import { useState } from "react";
function App() {
  const [taskList, setTaskList] = useState(['one']);
  return (
    <div className="App">
      <MyComponent1 taskList={taskList} setTaskList={setTaskList}></MyComponent1>
      <MyComponent2 taskList={taskList}></MyComponent2>
    </div>
    
  );
}

export default App;
