import React, { ButtonHTMLAttributes } from 'react';
import '../../../styles/components/MyButton.scss'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  className?: string;
}

export const MyButton: React.FC<ButtonProps> = (props) => {
  const { children } = props;
  return <button className="button">{children}</button>;
};
