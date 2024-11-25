import React from 'react'

const Todolist = ({ text, id, key, deleteTodo, updateTodo}) => {
  return (
    <div className='flex items-center justify-between h-16 gap-2  mx-2 '>
        <input type="text" className='h-8 w-screen border-none outline-none rounded-xl px-3'value={text} readOnly/>
        <div className='flex gap-x-2'>
        <button className='h-8 px-3 border-none outline-none rounded-xl bg-black text-white font-semibold' onClick={() => {updateTodo(id)}}>Update</button>
        <button className='h-8 px-3 border-none outline-none rounded-xl bg-black text-white font-semibold' onClick={() => {deleteTodo(id)}}>Delete</button>
        </div>
    </div>
  )
}

export default Todolist