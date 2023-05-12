import './App.css';
import DetailPages from './page/detail';
import HomePage from './page/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import {QueryClient, QueryClientProvider} from 'react-query'

export const queryClient = new QueryClient()

function App() {
  return (
    <div>
      <QueryClientProvider client={queryClient}>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/city/:id' element={<DetailPages/>}/>
      </Routes>
      </BrowserRouter>
      </QueryClientProvider>
    </div>
  );
}

export default App;
