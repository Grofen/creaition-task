import { PropsWithChildren } from 'react';
import cx from 'classnames';

import styles from './styles.module.scss';

import { ButtonVariant } from '@/types';

interface Props {
  className?: string;
  isDisabled?: boolean;
  type?: 'button' | 'submit' | 'reset';
  variant?: ButtonVariant;
  onClick?: () => void;
}

const Button = ({
  children,
  className,
  isDisabled,
  type = 'button',
  variant = ButtonVariant.Dark,
  onClick,
}: PropsWithChildren<Props>): JSX.Element => {
  return (
    <button
      className={cx(
        styles.button,
        styles[variant],
        isDisabled && styles.isDisabled,
        className,
      )}
      type={type}
      disabled={isDisabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default Button;
