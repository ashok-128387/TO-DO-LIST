import React, { useState } from 'react'
import './App.css';
function App() {

  const [list, setList]= useState([]);
  const[input, setInput]=useState("");

  const addTodo =(todo) => {
    const newTodo = {
      id: Math.random(),
      todo: todo,
    };
    setList([...list, newTodo]);

    setInput("");
  };

  const deleteTodo = (id) => {
    const newList=list.filter((todo)=>todo.id !== id);  
    setList(newList);
  };
  
  return(
    <div class="container" style={{ marginTop: '200px' }}>
      <center>
      <h1><big><i>To Do List</i></big></h1>
      <input type="text" value={input} onChange={(e) => setInput(e.target.value)}/>
      <br /><br/>
      <button class="btn" onClick={()=> addTodo(input)}>Add</button>
      <ul class="nobults">
        {list.map((todo)=>(
          <li key={todo.id}>{todo.todo}
          <button class="btn2"  onClick={()=> deleteTodo(todo.id)}> &times; </button><br/>
          </li>
        ))}
      </ul>
      </center>
    </div>

  );
}
export default App;