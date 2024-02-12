import { FC, memo } from 'react';

import { Square } from '../square';

import styles from './Board.module.scss';

interface BoardProps {
  squares: Array<string | null>;
  onClick: (squareIndex: number) => void;
}

export const Board: FC<BoardProps> = memo(({ squares, onClick }) => (
  <div className={styles.wrapper}>
    {squares.map((square, index) => (
      <Square key={index} square={square} onClick={() => onClick(index)} />
    ))}
  </div>
));
