import React, { useEffect, useState } from 'react'

const DataFetch = () => {
  const [todo,setTodo]= useState(null);
  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
      setTodo(data);
    })
  });
  const todoElement=
  todo && todo.map((to)=>{
    return <p key={to.id} >{to.title}</p>
 });

  return (
    <div>
      <h1>My Todos</h1>
      {todoElement}
    </div>
  )
}

export default DataFetch