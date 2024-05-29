import { RouterProvider } from 'react-router-dom';
import routes from './router/router';
function App() {

  return (
    <RouterProvider router={routes}></RouterProvider>
  )
}

export default App
