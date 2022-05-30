import * as React from 'react';
import { StyledButton } from './button.style';

type ButtonProps = {
  children: React.ReactNode;
  onClick: () => void;
  size: 'small' | 'medium' | 'large';
  disabled?: boolean;
};

export const Button = ({ children, onClick, size, disabled }: ButtonProps) => {
  return (
    <StyledButton
      state={disabled ? 'disabled' : 'default'}
      disabled={disabled}
      size={size}
      onClick={onClick}
    >
      {children}
    </StyledButton>
  );
};

Button.defaultProps = {
  size: 'regular',
};
