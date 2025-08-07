import styles from './Button.module.scss';

interface Props {
  title: string;
  onClick?: () => void;
}

const Button: React.FC<Props> = ({ title, onClick }) => {
  return (
    <button className={styles.button} onClick={onClick}>
      {title}
    </button>
  );
};

export default Button;
