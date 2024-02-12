import { FC, memo } from 'react';

import { useGame } from '../../hooks/useGame';
import { Board } from '../board';

import styles from './Game.module.scss';

interface GameProps {}

export const Game: FC<GameProps> = memo(() => {
  const {
    squares,
    title,

    onClick,
    onStart,
  } = useGame();

  return (
    <div className={styles.wrapper}>
      <p className={styles.title}>{title}</p>

      <Board squares={squares} onClick={onClick} />

      <button className={styles.startButton} onClick={onStart}>
        Start Game / Reset
      </button>
    </div>
  );
});
