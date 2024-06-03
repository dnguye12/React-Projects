import { useState } from "react"
import validator from 'validator'

function App() {
  const [errorMessage, setErrorMessage] = useState('')

  const onChange = (e) => {
    if (validator.isStrongPassword(e.target.value, {
      minLength: 8, minLowercase: 1,
      minUppercase: 1, minNumbers: 1, minSymbols: 1
    })) {
      setErrorMessage("Strong password")
    }else {
      setErrorMessage("Weak password")
    }
  }
  return (
    <div>
      <h1>Checking Password Strength</h1>
      <form>
        <input type="text" name="pass" onChange={onChange}></input>
        <p>{errorMessage}</p>
      </form>
    </div>
  )
}

export default App
