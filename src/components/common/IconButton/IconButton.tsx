import type { ReactNode } from 'react';

import styles from './IconButton.module.scss';

interface Props {
  children: ReactNode;
  onClick?: () => void;
}

const IconButton: React.FC<Props> = ({ children, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {children}
    </button>
  );
};

export default IconButton;
