import { buttonStyles } from './button.css';
import { sizeVariants } from '../variants/size.css';
import clsx from 'clsx';

/* eslint-disable-next-line */
export interface ButtonProps {
  size?: keyof typeof sizeVariants;
  children: React.ReactNode;
}

export function Button({ children, size = 'medium' }: ButtonProps) {
  return (
    <button className={clsx(buttonStyles, sizeVariants[size])}>
      {children}
    </button>
  );
}

export default Button;
