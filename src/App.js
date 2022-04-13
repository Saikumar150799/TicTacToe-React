import React, { useEffect, useState } from 'react'
import './App.css';
import Box from './Box';

const initialNumbers = ['', '', '', '', '', '', '', '', '']

function App() {

  const [boxNum, updateBoxNum] = useState(initialNumbers)
  const [turns, updateTurns] = useState(false)
  
  const boxClick = (id) => {
    let string = Array.from(boxNum)
    if(string[id]!='') return
    string[id] = turns ? "X" : "O"
    updateBoxNum(string)
    updateTurns(!turns)

  }

  useEffect(() => {
    let winnerPlayer = checkWinner()
    if(winnerPlayer){
      alert(`Wow " ${winnerPlayer} " won the game`)
      updateBoxNum(initialNumbers)
    }
  }, [boxNum])


  const checkWinner = () => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (boxNum[a] && boxNum[a] === boxNum[b] && boxNum[a] === boxNum[c]) {
        return boxNum[a];
      }
    }
    return null;
  }

  return (
    <div className="App">
      <div className='Game-Container'>
        <h1>Tic Tac Toe</h1>
        <div className='row'>
          <Box id={boxNum[0]} onClick={() => boxClick(0)} />
          <Box id={boxNum[1]} onClick={() => boxClick(1)} />
          <Box id={boxNum[2]} onClick={() => boxClick(2)} />

          <Box id={boxNum[3]} onClick={() => boxClick(3)} />
          <Box id={boxNum[4]} onClick={() => boxClick(4)} />
          <Box id={boxNum[5]} onClick={() => boxClick(5)} />

          <Box id={boxNum[6]} onClick={() => boxClick(6)} />
          <Box id={boxNum[7]} onClick={() => boxClick(7)} />
          <Box id={boxNum[8]} onClick={() => boxClick(8)} />
        </div>
        <button className='clear-btn' onClick={() => updateBoxNum(initialNumbers)}>Clear Button</button>
      </div>
    </div>
  );
}

export default App;
