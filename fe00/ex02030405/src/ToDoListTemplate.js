
import React, {useRef,useState} from "react";
import ToDoInput from "./Input";
import ItemList from "./itemList";
import "./ToDoListTemplate.css";
export default function ToDoListTemplate(){

  const idNum= useRef(1);

  const [todos, setToDos] = useState([])

  const onAdd = (text) => {
    setToDos([
      ...todos,
    {
      id: idNum.current++,
      text: text,
      checked: false,
    } 
  ])
  }
  const onDel = (id) => {
    setToDos(todos.filter(todo=>todo.id !== id))
  }

  const onUpdate =(id) => {
    setToDos(todos.map(todo=>todo.id === id ? {
      ...todo,
      checked:!todo.checked
    } : todo))
  }
    return (
        <div> 
        <h1>ToDoList</h1>
          <section>
        <ToDoInput onAdd={onAdd}/>
          </section>
       <hr/>
       <section>
       <ItemList todos={todos} onDel={onDel} onUpdate={onUpdate}/>
       </section>
      </div>
    );

}