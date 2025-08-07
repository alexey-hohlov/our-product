import type { ReactNode } from 'react';

import { Navbar, Footer } from '@/components';

import styles from './Layout.module.scss';

interface Props {
  children: ReactNode;
}

const Layout: React.FC<Props> = ({ children }) => {
  return (
    <main className={styles.layout}>
      <Navbar />
      <div className={styles.wrapper}>
        <div className={styles.content}>{children}</div>
      </div>
      <Footer />
    </main>
  );
};

export default Layout;
