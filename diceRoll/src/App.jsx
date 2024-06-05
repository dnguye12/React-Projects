import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import Die from './components/Die'
import { useState } from 'react'
library.add(fas)

function App() {
  const [die1, setDie1] = useState(1)
  const [die2, setDie2] = useState(1)
  const [isRolling, setIsRolling] = useState(false)

  const numberToWord = {
    1: 'one',
    2: 'two',
    3: 'three',
    4: 'four',
    5: 'five',
    6: 'six'
  }

  const roll = () => {
    if (isRolling === false) {
      setDie1(Math.floor(Math.random() * 6) + 1)
      setDie2(Math.floor(Math.random() * 6) + 1)
      setIsRolling(true)
      setTimeout(() => {
        setIsRolling(false)
      }, 1000)
    }
  }

  return (
    <div className='flex justify-center align-middle container'>
      <div>
        <Die dot={numberToWord[die1]} isRolling={isRolling} />
        <Die dot={numberToWord[die2]} isRolling={isRolling} />
      </div>
      <button onClick={roll}>Roll dies</button>
    </div>
  )
}

export default App
