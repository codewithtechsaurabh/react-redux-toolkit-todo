import React,{useState} from 'react'
import { addTodo } from '../features/todo/todoSlice'
import { useDispatch } from 'react-redux';

function AddTodo() {
    // State and poperties
    const [input, setInput] = useState('');
    const dispatch = useDispatch();

    // This is handler to dispatch the addTodo reducer
    const addTodoHandler = (e) => {
        e.preventDefault();
        dispatch(addTodo(input));
        setInput('');
    } 
  return (
    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
        <form onSubmit={addTodoHandler}>
        <div className=" grid gap-x-2 gap-y-1 sm:grid-cols-6">
            <div className="sm:col-span-4">
            <input
                className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring"
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
            />
            </div>
            <div className="sm:col-span-2">
            <button type="submit" className="rounded-md bg-indigo-600 px-6 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">Add Todo</button>
            </div>
            </div>
        </form>
      
    </div>
  )
}

export default AddTodo
