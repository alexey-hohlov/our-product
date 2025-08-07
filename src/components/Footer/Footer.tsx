import { useTranslation } from 'react-i18next';

import { Logo } from '@/components';

import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  const { t } = useTranslation();

  const content = {
    company: t('footer.company', { returnObjects: true }) as string[],
    support: t('footer.support', { returnObjects: true }) as string[],
    explore: t('footer.explore', { returnObjects: true }) as string[],
  };
  return (
    <footer className={styles.footer}>
      <div className={styles.content}>
        <ul>
          <li>
            <Logo variant={'light'} />
          </li>
          {content.company.map(companyItem => (
            <li key={companyItem}>
              <a href=''>{companyItem}</a>
            </li>
          ))}
        </ul>
        <ul>
          {content.support.map(supportItem => (
            <li key={supportItem}>
              <a href=''>{supportItem}</a>
            </li>
          ))}
        </ul>
        <ul>
          {content.explore.map(exploreItem => (
            <li key={exploreItem}>
              <a href=''>{exploreItem}</a>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
