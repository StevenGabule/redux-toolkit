import './App.css';
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Index';
import SingleCockTail from './pages/SingleCockTail';
import Headers from './components/Header'

function App() {
  return (
    <div className="App">
      <Headers />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cocktail/:id' element={<SingleCockTail />} />
      </Routes>
    </div>
  );
}

export default App;
