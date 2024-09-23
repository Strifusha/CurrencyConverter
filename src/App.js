import { QueryClient, QueryClientProvider } from 'react-query';
import Layout from './components/Layout/Layout';
import '../src/style.css';

const queryClient = new QueryClient();

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <Layout />
    </QueryClientProvider>
  );
}

export default App;