import Header from "./components/Header"
import Home from "./components/Home"
import Contact from "./components/Contact"
import About from "./components/About"
import Counter from "./components/Counter"
import Form from "./components/Form"
import { BrowserRouter,Route,Routes } from "react-router-dom"



function App() {

  return (
    <>
     <BrowserRouter>
     <Header/>
     <Routes>
     <Route path="/contact" element={<Contact/>}/>
     <Route path="/header" element={<Header/>}/>
      <Route path="/" element={<Home/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/counter" element={<Counter/>}/>
      <Route path="/form" element={<Form/>}/>
      

     </Routes>
     </BrowserRouter>
    </>
  )
}

export default App
