
import './App.css'
import Header from './components/Header'
import Contact from './components/Contact'
import Demo from './components/Demo'
import Home from './components/Home'
import About from './components/About'

import{ BrowserRouter, Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}>
      </Route>
      <Route path='/about' element={<About/>}>
      </Route>
      <Route path='/contact' element={<Contact/>}>
      </Route>
      <Route path='/demo' element={<Demo/>}>
      </Route>
      <Route path='/header' element={<Header/>}>
      </Route>
    </Routes>
    </BrowserRouter>

    </>
  )
}

export default App
