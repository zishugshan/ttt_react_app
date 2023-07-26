import { useState } from "react"
import Square from "./Square"

const whoIsWinner = (squares) => {
  const checkLines = [
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
  ]
  for(let i=0; i<checkLines.length;i++){
    const [a,b,c] = checkLines[i];
    if(squares[a] && squares[a]===squares[b] && squares[a]===squares[c])
    return squares[a];
  }
  
  return null;
}

const Board = () => {
  const [xTurn, setXturn] = useState(1)
  const [squares,setSquares] = useState(Array(9).fill(null));
  const handleClick = (index) => {
    console.warn("clicked")
    if(squares[index] || whoIsWinner(squares)) return;
    const newSquares = squares.slice();
    newSquares[index]=(xTurn===1)?'X':'O';
    setSquares(newSquares);
    setXturn(1-xTurn);
    
  }
  let status = ""
  const winner = whoIsWinner(squares);

  status = (winner ? "Winner : " + winner  : " Player : " + (xTurn ? 'X':'O'))
    
  return <>
          <div className="board">
            <div className="status"><h3>{status}</h3></div>
            <div className="board-row">
              <Square p={squares[0]} changePlayer={() => handleClick(0)}/>
              <Square p={squares[1]} changePlayer={() => handleClick(1)}/>
              <Square p={squares[2]} changePlayer={() => handleClick(2)}/>
            </div>
            <div className="board-row">
              <Square p={squares[3]} changePlayer={() => handleClick(3)}/>
              <Square p={squares[4]} changePlayer={() => handleClick(4)}/>
              <Square p={squares[5]} changePlayer={() => handleClick(5)}/>
            </div>
            <div className="board-row">
              <Square p={squares[6]} changePlayer={() => handleClick(6)}/>
              <Square p={squares[7]} changePlayer={() => handleClick(7)}/>
              <Square p={squares[8]} changePlayer={() => handleClick(8)}/>
            </div>
          </div>
        </>
}
export default Board