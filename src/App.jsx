import { useState } from "react";
import './styles.scss'
import Board from './components/Board'
import { calculateWinner } from "./winner";

function App() {
  const [square , setSquare] = useState(Array(9).fill(null))
  const [isXNext , setIsXNext] = useState(false)
  const winner = calculateWinner(square)
  console.log(winner)
  const nextPlayer = isXNext ? 'X':'O'
  const statusMessage = winner ? `winner is ${winner}` : ` Next player is ${nextPlayer}`

  const handleSquareClick = clikedPosition => {

    if(square[clikedPosition] || winner){
      return;
    }

    setSquare(currentSquares=> {
      return currentSquares.map((squareValue , squareIndex)=> {
        if(clikedPosition === squareIndex){
          return isXNext ? 'X':'O'
        }
        return squareValue
      })
    })
    setIsXNext( currentX => !currentX)
  }

  return (
    <div className='app'>
      <h2>{statusMessage}</h2>
      <Board squares={square} handleSquareClick={handleSquareClick} />
    </div>
  )
}

export default App
