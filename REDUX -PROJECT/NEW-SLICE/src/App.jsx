
import { useSelector, useDispatch } from 'react-redux'
import { decrement, increment } from "./Slice/NewSlice"
import { multiply,divide } from './Slice/NewCounter'
import { login,logout } from './Slice/ToDoSlice'



 function App() {
  const count = useSelector((state) => state.counter.value)
  const oth = useSelector((state) => state.other.value)
  const vinit = useSelector((state) => state.auth.value)
  const dispatch = useDispatch()

  return (
    <div>
      <div>
        <button  onClick={() => dispatch(increment())} >Increment </button>
        <span>{count}</span>
        <button  onClick={() => dispatch(decrement())}>Decrement</button>
      </div>
      <div>
        <button  onClick={() => dispatch(multiply())} >multiply </button>
        <span>{oth}</span>
        <button  onClick={() => dispatch(divide())}>divide</button>
      </div>

      <div>
        <button  onClick={() => dispatch(login())} >login </button>
        <span>{vinit}</span>
        <button  onClick={() => dispatch(logout())}>logiut</button>
      </div>
    </div>


// to do slice start here
  )
}
export default App