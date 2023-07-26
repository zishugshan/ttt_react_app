
const Square = ({p,changePlayer}) => {
  
  return <button className="square" onClick={changePlayer}>{p}</button>
}


export default Square