import { ErrorBoundary } from "react-error-boundary";
import ChildComponent from "./components/child.component";
import ErrorComponent from "./components/error.component";

const App = () => {

  return (
    <ErrorBoundary fallbackRender={ErrorComponent}>
      <ChildComponent></ChildComponent>
    </ErrorBoundary>

  );
};

export default App;