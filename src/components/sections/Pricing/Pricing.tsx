import { useTranslation } from 'react-i18next';
import { Swiper, SwiperSlide } from 'swiper/react';

import { Button, PricingCard } from '@/components';
import { useMediaQuery } from '@/hooks/useMediaQuery';
import type { IPricingCard } from '@/types/landingTypes';

import 'swiper/swiper-bundle.css';
import styles from './Pricing.module.scss';

const Pricing: React.FC = () => {
  const { t } = useTranslation();
  const cards = t('pricing.cards', { returnObjects: true }) as IPricingCard[];

  const isMobile = useMediaQuery('(max-width: 768px)');

  return (
    <section className={styles.pricing}>
      <h3>{t('pricing.title')}</h3>
      <p>{t('pricing.description')}</p>
      {isMobile ? (
        <div className={styles.slider}>
          <Swiper
            spaceBetween={10}
            loop={false}
            breakpoints={{ 640: { slidesPerView: 2 } }}
            grabCursor={true}
          >
            {cards.map(card => (
              <SwiperSlide key={card.title}>
                <PricingCard card={card} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      ) : (
        <ul className={styles.list}>
          {cards.map(card => (
            <li key={card.title}>
              <PricingCard card={card} />
            </li>
          ))}
        </ul>
      )}
      <Button title={t('pricing.button')} />
    </section>
  );
};

export default Pricing;
