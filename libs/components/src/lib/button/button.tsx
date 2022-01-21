import { buttonStyles } from './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button({ children }: React.PropsWithChildren<ButtonProps>) {
  return <button className={buttonStyles}>{children}</button>;
}

export default Button;
