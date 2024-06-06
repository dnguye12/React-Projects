import { useEffect, useState } from "react"
import itemService from './services/items'
import { v4 as uuidv4 } from 'uuid';

import Adder from "./components/Adder"
import Item from "./components/Item"

function App() {
  const [newItem, setNewItem] = useState("")
  const [todoList, setTodoList] = useState([])

  useEffect(() => {
    itemService
      .getAll()
      .then(response => {
        setTodoList(response)
      })
  }, [])

  const addItem = (newItem) => {
    const newObject = { id: uuidv4(), title: newItem, checked: false }

    itemService
      .create(newObject)
      .then(response => {
        setTodoList([...todoList, response])
      })
  }

  const checkedItem = (item) => {
    const changedItem = { ...item, checked: true }
    itemService
      .update(changedItem.id, changedItem)
      .then(response => {
        setTodoList(todoList.map(todo => todo.id !== changedItem.id ? todo : response))
      })
  }

  const deleteItem = (id) => {
    itemService
      .deleteItem(id)
      .then(() => {
        setTodoList(todoList.filter(todo => todo.id !== id))
      })
  }

  return (
    <div className="bg-gray-50 flex justify-center items-center min-h-screen">
      <div className="bg-white p-8 rounded-lg shadow-lg text-center container">
        <h1 className="uppercase font-black text-5xl text-gray-700 tracking-wider">todo list</h1>
        <Adder newItem={newItem} setNewItem={setNewItem} addItem={addItem} />
        {todoList.map(todo => <Item key={todo.id} id={todo.id} title={todo.title} checked={todo.checked} checkedItem={checkedItem} deleteItem={deleteItem}/>)}
      </div>
    </div>
  )
}

export default App
