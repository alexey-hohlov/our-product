import { useTranslation } from 'react-i18next';
import {
  Accordion,
  AccordionItem,
  AccordionHeader,
  AccordionTrigger,
  AccordionContent,
} from '@radix-ui/react-accordion';

import { ChevronIcon } from '@/assets';

import styles from './Questions.module.scss';

const Questions: React.FC = () => {
  const { t } = useTranslation();
  const items = t('questions.items', { returnObjects: true }) as {
    question: string;
    answer: string;
  }[];
  return (
    <section>
      <h3>{t('questions.title')}</h3>
      <Accordion type='single' collapsible className={styles.accordion}>
        {items.map(item => (
          <AccordionItem
            value={item.question}
            className={styles.item}
            key={item.question}
          >
            <AccordionHeader className={styles.header}>
              <AccordionTrigger className={styles.trigger}>
                {item.question}
                <ChevronIcon className={styles.chevron} />
              </AccordionTrigger>
            </AccordionHeader>
            <AccordionContent className={styles.content}>
              <div className={styles.contentText}>{item.answer}</div>
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default Questions;
