import Login from "./components/Login"
import Signup  from "./components/Signup"
import Teacher from "./components/Teacher"
import Class from "./components/Class"
import Student from "./components/Student"
import { BrowserRouter,Route,Routes } from "react-router-dom"
import Dashbar from "./components/Dashbar"
import Home from './components/Home';

function App() {

  return (
    <>
    <BrowserRouter>
    <Dashbar/>
    <Routes>
    <Route path="/" element={<Home/>}></Route>
    <Route path="/class" element={<Class/>}></Route>
    <Route path="/signup" element={<Signup/>}></Route>
    <Route path="/teacher" element={<Teacher/>}></Route>
    <Route path="/student" element={<Student/>}></Route>
    <Route path="/login" element={<Login/>}></Route>
    </Routes>
    </BrowserRouter>
    </>
  )
}

export default App

