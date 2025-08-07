import { useTranslation } from 'react-i18next';

import { Button } from '@/components';

import styles from './Greetings.module.scss';

const Greetings: React.FC = () => {
  const { t } = useTranslation();
  const paragraphs = t('greetings.text', { returnObjects: true }) as string[];

  return (
    <section className={styles.greetings}>
      <div className={styles.text}>
        <h3>{t('greetings.title')}</h3>
        {paragraphs.map((p, i) => (
          <p key={i}>{p}</p>
        ))}
        <Button title={'Get Started'} />
      </div>
      <img className={styles.image} src='greetings-image.png' alt='' />
    </section>
  );
};

export default Greetings;
