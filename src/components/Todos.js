import React from 'react'
import { useSelector,useDispatch } from 'react-redux'
import { removeTodo } from '../features/todo/todoSlice'

function Todos() {
    // State and poperties
    const todos = useSelector((state) => state.todos);
    const dispatch = useDispatch();

  return (
    <div className="mt-3 sm:mx-auto sm:w-full sm:max-w-sm">
      <div className="text-3xl font-bold flex justify-center">Todos</div>
      <ul className="list-one">
      {todos.map((todo) =>(
        <li key={todo.id} className='mt-2 flex justify-between bg-dark-300 py-2 px-2 rounded'>
        <div key={todo.id}>{todo.text}</div>
        <button onClick={() => dispatch(removeTodo(todo.id))} className='bg-red-500 hover:bg-red-700 text-white font-bold py-1 px-2 rounded'>Delete</button>
        </li>
      ))}
      </ul>
    </div>
  )
}

export default Todos
