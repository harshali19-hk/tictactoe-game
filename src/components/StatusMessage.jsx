
const StatusMessage = ({ winner,gamingBoard}) => {
  const {isXNext,square} = gamingBoard
  const noMovesLeft = square.every((squareValue)=> squareValue != null)
    const nextPlayer = isXNext ? 'X':'O'

  const renderMessage = ()=>{
    if(winner){
      return <> winner is <span className={ winner === 'X' ? "text-orange" : "text-green"}>{winner}</span> </>
    }
    if(!winner && noMovesLeft){
      return <> <span className="text-green">O</span> and <span  className="text-orange">X</span> tied </>
    }
    else {
      return <> Next player is <span className={ isXNext ? "text-orange" : "text-green"}>{nextPlayer}</span> </>
    }
  }

  return (
    <>
       {/* {winner && <div> winner is {winner} </div>}
       {!winner && noMovesLeft && <div> O and X tied </div>}
       {!winner && ! noMovesLeft && <div> Next player is {nextPlayer} </div>} */}

      <h1> {renderMessage()}</h1>
    </>
  )
}

export default StatusMessage
