import React from 'react'
import Todolist from './components/Todolist'
import { useState, useRef } from "react"

const App = () => {
  const [todos, setTodos] = useState([])
  const inputRef = useRef(null)

  const addTodo = () => {
    const data = inputRef.current?.value?.trim()

    if (!data) return;

    const todo = {
      text: data,
      id: Date.now(),
      isCompleted: false
    }

    setTodos([...todos, todo])
    inputRef.current.value = ""
  }

  const deleteTodo = (id) => {
    setTodos((prev) => {
      return prev.filter((value) => value.id != id)
    })
  }

  const updateTodo = (id) => {
    const newData = prompt()
    if (newData?.trim() === "") return;

    setTodos((prev) => {
      return prev.map((value) => {
        if (value.id === id) {
          value.text = newData
        }
        return value
      })
    })
  }
  return (
    <div className='h-screen w-screen bg-teal-700 flex items-center justify-center flex-col gap-y-4'>
      <div className='flex gap-x-2'>
        <input type="text" 
        placeholder='Add to your to-do here...'
        className="h-10 w-96 rounded-xl px-3 outline-none ring-0 hover:ring-2 hover:ring-black" ref={inputRef}/>
        <button className="bg-black text-white h-10 px-3 rounded-xl font-semibold hover:bg-white hover:text-black hover:font-bold" onClick={addTodo}>Add</button>
      </div>

      <div className='h-96 w-1/2 bg-gray-400 rounded-lg overflow-y-auto'>
        {
          todos.map((value, index) => {
            return <Todolist text={value.text} key={index} id={value.id} deleteTodo={deleteTodo} updateTodo={updateTodo}/>
          })
        }
      </div>
    </div>
  )
}

export default App