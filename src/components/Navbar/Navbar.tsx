import { useState } from 'react';
import { useMediaQuery } from '@/hooks/useMediaQuery';

import { BurgerIcon } from '@/assets';
import { Drawer, IconButton, Logo, NavLinks } from '@/components';

import styles from './Navbar.module.scss';

const Navbar: React.FC = () => {
  const isMobile = useMediaQuery('(max-width: 768px)');

  const [drawer, setDrawer] = useState<boolean>(false);
  const toggleDrawer = () => {
    setDrawer(prev => !prev);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.wrapper}>
        {isMobile ? (
          <div className={styles.content}>
            <Logo />
            <IconButton onClick={toggleDrawer}>
              <BurgerIcon className={styles.burger} />
            </IconButton>
          </div>
        ) : (
          <NavLinks />
        )}
      </div>
      {isMobile && (
        <Drawer
          isOpen={drawer}
          onClose={toggleDrawer}
          title={'sidebar'}
          description={'navigation'}
        >
          <NavLinks />
        </Drawer>
      )}
    </nav>
  );
};

export default Navbar;
