import './App.css';
import ProductListComponent from './components/products-list/product-list.component';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
function App() {
  const queryClient = new QueryClient();
  return (
    <>
      <QueryClientProvider client={queryClient}>
        <ProductListComponent></ProductListComponent>
      </QueryClientProvider>
    </>
  )
}

export default App
