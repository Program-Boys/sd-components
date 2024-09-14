import { SDButtonProps } from "./SDButton.type";

export const SDButton = ({ text, ...props }: SDButtonProps) => {
  return <button {...props}>{text}</button>;
};
