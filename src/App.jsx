import { useState } from "react";
import "./styles.scss";
import Board from "./components/Board";
import { calculateWinner } from "./winner";
import StatusMessage from "./components/statusMessage";
import History from "./components/History";

const NEW_GAME = [{square : Array(9).fill(null) , isXNext : false}]

function App() {
  const [history , setHistory] = useState(NEW_GAME)
  const [currentMove , setCurrentMove] = useState(0)

  const gamingBoard = history[currentMove]
  const {winner,winningSquares} = calculateWinner(gamingBoard.square);
  console.log({history,currentMove})

  const handleSquareClick = (clikedPosition) => {
    if (gamingBoard.square[clikedPosition] || winner) {
      return;
    }
    setHistory((currentHistory) => {
      const isTraversing = currentMove + 1 !== currentHistory.length
         const lastGamingState = isTraversing ? currentHistory[currentMove] : currentHistory[currentHistory.length-1]

      const nextSquareState = lastGamingState.square.map((squareValue, squareIndex) => {
        if (clikedPosition === squareIndex) {
          return lastGamingState.isXNext ? "X" : "O";
        }
        return squareValue;
      });

      const base = isTraversing ? currentHistory.slice(0,currentHistory.indexOf(lastGamingState)+1) : currentHistory
      return base.concat({square : nextSquareState , isXNext : !lastGamingState.isXNext})
    });
    setCurrentMove( move=> move + 1)

  };

  const moveTo = move=>{
    setCurrentMove(move)
  }

  const handleNewGame = ()=>{
    setHistory(NEW_GAME)
    setCurrentMove(0)
  }

  return (
    <div className="app">

      <h1>TIC <span className="text-orange">TAC</span>TOE</h1>

      <StatusMessage  winner={winner} gamingBoard={gamingBoard}  />

      <Board squares={gamingBoard.square} handleSquareClick={handleSquareClick} winningSquares={winningSquares} />

      <button type="button" onClick={handleNewGame} className={`btn-reset ${ winner ? 'active' : ""}`}>Start New Game</button>

      <h3 style={{fontWeight : "normal"}}>Current Game History</h3>

     <History history={history} moveTo={moveTo} currentMove={currentMove} />

     <div className="bg-balls"></div>
    </div>
  );
}

export default App;
