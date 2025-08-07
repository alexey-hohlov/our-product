import { useTranslation } from 'react-i18next';

import { Logo } from '@/components';

import styles from './NavLinks.module.scss';

const NavLinks: React.FC = () => {
  const { t } = useTranslation();
  const links = t('navbar.links', { returnObjects: true }) as string[];
  return (
    <ul className={styles.links}>
      <Logo />
      {links.map(link => (
        <li key={link}>
          <a href=''>{link}</a>
        </li>
      ))}
    </ul>
  );
};

export default NavLinks;
