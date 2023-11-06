
const Square = ({value, onClick,isWinningSquare}) => {
  const colourClassName = value === 'X' ? 'text-orange' : 'text-green'
  const winningClassName = isWinningSquare ? "winning" : ""
  return (
    <button type="button" className={`square ${colourClassName} ${winningClassName}`} onClick={onClick}>
      {value}
    </button>
  )
}

export default Square
