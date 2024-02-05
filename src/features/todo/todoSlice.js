import { createSlice, nanoid } from "@reduxjs/toolkit";

const initialState ={
    todos: [{id:1,text:"Hello"}],
}

export const todoSlice = createSlice({
    name:"todo",
    initialState,
    reducers:{
        // This method is called for add item to the todos list
        addTodo:(state,action)=>{
            const todo ={
                id:nanoid(),
                text:action.payload,
            }
            state.todos.push(todo);
        },
        // This method is called for remove item to the todos list
        removeTodo:(state,action)=>{
            state.todos = state.todos.filter((todo)=>
            todo.id!== action.payload
        )
        },
    }}
)

export const {addTodo, removeTodo} = todoSlice.actions
export default todoSlice.reducer