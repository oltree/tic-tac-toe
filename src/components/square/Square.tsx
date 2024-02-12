import { FC, memo } from 'react';

import styles from './Square.module.scss';

interface SquareProps {
  square: string | null;
  onClick: VoidFunction;
}

export const Square: FC<SquareProps> = memo(({ square, onClick }) => (
  <button className={styles.wrapper} onClick={onClick}>
    {square}
  </button>
));
