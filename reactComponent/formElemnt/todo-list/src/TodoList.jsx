import { useState } from "react";
import { v4 as uuidv4 } from 'uuid';

export default function TodoList() {
  let [todos, setTodos] = useState([{task: "sample task", id: uuidv4()}]);  // Fixed here



  // input element will get tracked using this 
  let [newTodo, setNewTodo] = useState("");





  // when button is pressed then only todo get added 
  let addNewTask = () => {
    console.log("we have to add new task inside body");
    setTodos([...todos, {task: newTodo , id: uuidv4()}]);  // Adds new task
    setNewTodo(" ");
  };




  // it will give some text line what should to add in todo 
  let updateTodoValue = (event) => {
    console.log(event.target.value);  // typed value will get printed letter by letter  a,ab.abc.
    setNewTodo(event.target.value);  // Updates the newTodo state
  
  };




let deleteTodo = (id) => {
  setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== id));
};




let upperCaseAll=()=>{
  // todos.map((todo)=>{console.log(todo)});

  // 1st 
  // let newArr=todos.map((todo)=>{
  //   return {
  //     ...todo,
  //     task:todo.task.toUpperCase(),
  //   }
  // });
  // console.log(newArr); 
  // setTodos(newArr);

  // 2nd
  setTodos((todos)=>
  todos.map((todo)=>{
    return {
      ...todo,
      task:todo.task.toUpperCase(),
    };
  })
);

}


let upperCaseOne=(id)=>{

    setTodos((todos)=>
      todos.map((todo)=>{
        if(todo.id==id){
          return {
            ...todo,
            task:todo.task.toUpperCase(),
        };
      }else{
        return todo;
      }
    })
  );
}





  return (
    <div>
      <input 
        placeholder="Add a task" 
        value={newTodo} 
        onChange={updateTodoValue}  // if any change in input type box  then just call update todo app 
      />
      <button onClick={addNewTask}> Add Task</button>
      <hr />
      <h4>Tasks Todo</h4>
        <ul>
          {todos.map((todo)=> (
            <li key={todo.id}>
            <span>{todo.task}</span>
            <button onClick={()=>deleteTodo(todo.id)}>Delete</button>
            <button onClick={()=>upperCaseOne(todo.id)}>upperCaseOne</button>
          </li>
        ))}
      </ul>
      <button onClick={upperCaseAll}>upperCaseAll</button>
   </div>
  );



}
