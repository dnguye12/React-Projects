import axios from "axios"
import { useState } from "react"

function App() {
  const [joke, setJoke] = useState('')

  const handleClick = async () => {
    try {
      const response = await axios.get('https://v2.jokeapi.dev/joke/Programming?format=txt')
      setJoke(response.data)
    }catch(e) {
      console.log(e)
    }
  }

  return (
    <div className="bg-gray-900 min-h-screen flex items-center justify-center">
      <div className="p-20 border container border-gray-700 rounded-lg shadow bg-gray-800 flex flex-col items-center justify-center">
        <h1 className="text-5xl font-bold text-white tracking-tight text-center mb-10">
          Joke Generator
        </h1>
        <button onClick={handleClick} className="bg-blue-600 hover:bg-blue-700 focus:ring-blue-800 focus:outline-none focus:ring-4 inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white rounded-lg">Click to generate a joke.</button>
        <p className="mt-5 text-gray-400">{joke}</p>
      </div>
    </div>
  )
}

export default App
