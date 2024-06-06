import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css'
import HomePage from './pages/Home';
import CarsPage from './pages/Cars';
import LendPage from './pages/Lend';
import StopPage from './pages/Stop';
import UpdateCarPage from './pages/UpdateCar'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={<HomePage />}/>
        <Route path='/cars' element={<CarsPage />}/>
        <Route path='/rent' element={<HomePage />}/>
        <Route path='/lend' element={<LendPage />}/>
        <Route path='/update-car' element={<UpdateCarPage />}/>
        <Route path='/lend/stop' element={<StopPage />}/>
      </Routes>
    </Router>
  )
}

export default App
