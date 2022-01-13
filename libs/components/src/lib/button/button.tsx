import { buttonStyles } from './button.css';

/* eslint-disable-next-line */
export interface ButtonProps {}

export function Button(props: ButtonProps) {
  return (
    <button className={buttonStyles}>
      <h1>Welcome to Button!</h1>
    </button>
  );
}

export default Button;
