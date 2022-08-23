import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import { Dashboard, Error, Login } from './pages';


function App() {
  return (
    <Router>
      <div className='font-main bg-gray-200/40 text-neutral-800 min-h-screen pb-16'>
        <Routes>
          <Route path='/' element={<Dashboard/>} />
          <Route path='/login' element={<Login/>} />
          <Route path='*' element={<Error/>} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
