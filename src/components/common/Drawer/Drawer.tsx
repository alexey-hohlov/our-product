import type { ReactNode } from 'react';
import { VisuallyHidden } from '@radix-ui/react-visually-hidden';
import {
  Dialog,
  DialogPortal,
  DialogOverlay,
  DialogContent,
  DialogTitle,
  DialogDescription,
} from '@radix-ui/react-dialog';

import styles from './Drawer.module.scss';

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  description: string;
  children: ReactNode;
}

const Drawer: React.FC<Props> = ({
  isOpen,
  onClose,
  title,
  description,
  children,
}) => {
  return (
    <Dialog open={isOpen}>
      <DialogPortal>
        <DialogOverlay className={styles.overlay} onClick={onClose} />
        <DialogContent className={styles.content}>
          <VisuallyHidden>
            <DialogTitle>{title}</DialogTitle>
            <DialogDescription>{description}</DialogDescription>
          </VisuallyHidden>
          {children}
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default Drawer;
