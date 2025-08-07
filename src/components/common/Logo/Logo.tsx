import styles from './Logo.module.scss';

interface Props {
  variant?: 'dark' | 'light';
}

const Logo: React.FC<Props> = ({ variant = 'dark' }) => {
  return (
    <a href='' className={styles.logo}>
      {variant === 'dark' && <img src='logo.png' alt='logo' />}
      {variant === 'light' && <img src='logo-light.png' alt='logo' />}
    </a>
  );
};

export default Logo;
