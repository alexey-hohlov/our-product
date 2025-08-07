import type { IReviewsCard } from '@/types/landingTypes';

import styles from './ReviewsCard.module.scss';

interface Props {
  card: IReviewsCard;
}

const ReviewsCard: React.FC<Props> = ({ card }) => {
  return (
    <li className={`${styles.card} ${styles[card.id]}`}>
      <h4>{card.title}</h4>
      <p>{card.text}</p>
    </li>
  );
};

export default ReviewsCard;
