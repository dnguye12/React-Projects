import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { useState } from 'react';
import Choice from './components/Choice';
library.add(fas)

function App() {
  const [playerChoice, setPlayerChoice] = useState("")
  const [computerChoice, setComputerChoice] = useState("")
  const [playerScore, setPlayerScore] = useState(0)
  const [computerScore, setComputerScore] = useState(0)

  const onChoice = (value) => {
    setPlayerChoice(value)
    setComputerChoice(getComputerChoice())
    getScores()
  }

  const getComputerChoice = () => {
    const helper = Math.floor(Math.random() * 3)
    switch (helper) {
      case 0:
        return "rock"
      case 1:
        return "paper"
      case 2:
        return "scissors"
    }
  }

  const getScores = () => {
    if (playerChoice !== computerChoice) {
      if (playerChoice === "rock") {
        if (computerChoice === "paper") {
          setComputerScore(computerScore + 1);
        } else {
          setPlayerScore(playerScore + 1);
        }
      } else if (playerChoice === "paper") {
        if (computerChoice === "rock") {
          setPlayerScore(playerScore + 1);
        } else {
          setComputerScore(computerScore + 1);
        }
      } else if (playerChoice === "scissors") {
        if (computerChoice === "rock") {
          setComputerScore(computerScore + 1);
        } else {
          setPlayerScore(playerScore + 1);
        }
      }
    }
  };


  return (
    <div>
      <h1>Welcome to Rock, Paper, Scissors Game</h1>

      <div>
        <Choice icon="fa-solid fa-hand-back-fist" value="rock" onChoice={onChoice} />
        <Choice icon="fa-solid fa-hand" value="paper" onChoice={onChoice} />
        <Choice icon="fa-solid fa-hand-scissors" value="scissors" onChoice={onChoice} />
      </div>

      <div>
        <h4>Your choice : {playerChoice}</h4>
        <h4>Computer choice : {computerChoice}</h4>
      </div>

      <div>
        <h3>Your Score : {playerScore}</h3>
        <h3>Computer Score : {computerScore}</h3>
      </div>
    </div>

  )
}

export default App
