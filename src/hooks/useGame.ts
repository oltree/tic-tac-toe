import { useState } from 'react';

import { calculateWinner } from '../utils/calculateWinner';

export const useGame = () => {
  const [squares, setSquares] = useState<Array<string | null>>(
    new Array(9).fill(null)
  );
  const [xIsNext, setXIsNext] = useState(true);
  const winner = calculateWinner(squares);

  const handleClick = (squareIndex: number) => {
    if (winner || squares[squareIndex]) {
      return;
    }

    const newSquares = [...squares];
    newSquares[squareIndex] = xIsNext ? 'X' : 'O';

    setSquares(newSquares);
    setXIsNext(!xIsNext);
  };

  const handleStart = () => {
    setSquares(new Array(9).fill(null));
    setXIsNext(true);
  };

  const title = winner
    ? `${winner} is the winner!`
    : `Next player: ${xIsNext ? 'X' : 'O'}`;

  return {
    squares,
    title,

    onClick: handleClick,
    onStart: handleStart,
  };
};
