import { useTranslation } from 'react-i18next';

import styles from './Advantages.module.scss';

const Advantages: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('advantages.cards', { returnObjects: true }) as {
    title: string;
    text: string;
    icon: string;
  }[];

  return (
    <section>
      <h3>{t('advantages.title')}</h3>
      <ul className={styles.list}>
        {cards.map(card => (
          <li className={styles.card} key={card.title}>
            <span>{card.title}</span>
            <p>{card.text}</p>
            <img src={card.icon} className={styles.image} alt='card-icon' />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default Advantages;
