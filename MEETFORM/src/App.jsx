// import { useState } from 'react'
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import Table from 'react-bootstrap/Table';

function App() {
  const[data,setdata]=useState([])
  const[expenseName,setExpenseName]=useState("")
  const[expenseAmount, setExpenseAmount]=useState("")
  const handleAddExpense=()=>{
    if(expenseName && expenseAmount){
      setdata([...data, {expenseName, expenseAmount}])
    }
    setExpenseName("")
    setExpenseAmount("")
  }
  console.log(data);
  

  return (
    <>
    <div className='container'>
    <h1 className="text-center">expense tracker</h1>
    <Form>  
      <Form.Group className="mb-3" controlId="formGroupEmail">
        <Form.Label>exprense name</Form.Label>
        <Form.Control type="text" placeholder="Enter expense name" value={expenseName} onChange={(e)=>setExpenseName(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formGroupPassword">
        <Form.Label>expense amount</Form.Label>
        <Form.Control type="number" placeholder="enter expense amount" value={expenseAmount} onChange={(e)=>setExpenseAmount(e.target.value)}/>
      </Form.Group>
      
    </Form>
    
    <div className='text-center'>
      <Button variant="danger" className='text-center' onClick={handleAddExpense}>Primary</Button>
      </div>
      {
        data && data.map(()=>(
          <></>
          <Table striped bordered hover>
      <thead>
        <tr>
          <th>#</th>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Username</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
          <td>@twitter</td>
        </tr>
      
    </Table>
        ))
      }
    </div>
      
    </>
  )
}

export default App
