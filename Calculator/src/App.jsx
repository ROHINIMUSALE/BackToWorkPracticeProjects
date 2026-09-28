import './App.css'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Counter from './calculator/counter'
import TipCalculator from './calculator/tip'
import BMICalculator from './calculator/bmi'
import Home from './calculator'

function App() {

  return (
    <>
    <h1>helllo</h1>
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/counter' element={<Counter/>}/>
        <Route path='/tip' element={<TipCalculator/>}/>
        <Route path='/bmi' element={<BMICalculator/>}/>
      </Routes>
    </BrowserRouter>
    </>
  )
}

export default App
