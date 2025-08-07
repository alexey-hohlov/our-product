import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { IReviewsCard } from '@/types/landingTypes';
import { ReviewsCard } from '@/components';

import 'swiper/swiper-bundle.css';
import styles from './Reviews.module.scss';

const Reviews: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('reviews.cards', { returnObjects: true }) as IReviewsCard[];

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section>
      <h3>{t('reviews.title')}</h3>
      {isMobile ? (
        <div className={styles.slider}>
          <Swiper
            spaceBetween={10}
            slidesPerView={1}
            loop={true}
            grabCursor={true}
            tag={'ul'}
          >
            {cards.map(card => (
              <SwiperSlide key={card.id}>
                <ReviewsCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <ul className={styles.list}>
          {cards.map(card => (
            <ReviewsCard key={card.id} card={card} />
          ))}
        </ul>
      )}
    </section>
  );
};

export default Reviews;
