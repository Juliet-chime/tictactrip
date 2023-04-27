import './App.css';
import DetailPages from './page/detail';
import HomePage from './page/home';
import {BrowserRouter,Routes,Route} from 'react-router-dom'

function App() {
  return (
    <div>
      <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage/>}/>
        <Route path='/city/:id' element={<DetailPages/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
