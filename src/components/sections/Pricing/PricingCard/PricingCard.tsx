import type { IPricingCard } from '@/types/landingTypes';

import styles from './PricingCard.module.scss';

interface Props {
  card: IPricingCard;
}

const PricingCard: React.FC<Props> = ({ card }) => {
  return (
    <div key={card.title} className={styles.card}>
      <div className={styles.textWrapper}>
        <h4>{card.title}</h4>
        <ul className={styles.features}>
          {card.features.map(feature => (
            <li key={feature}>&bull; {feature}</li>
          ))}
        </ul>
      </div>
      <span>{card.price}</span>
    </div>
  );
};

export default PricingCard;
