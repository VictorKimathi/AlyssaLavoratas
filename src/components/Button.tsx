import React from 'react';
import { Link } from 'react-router-dom';
interface ButtonProps {
  children: React.ReactNode;
  to?: string;
  href?: string;
  onClick?: () => void;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  download?: boolean;
  type?: 'button' | 'submit' | 'reset';
}
const Button: React.FC<ButtonProps> = ({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  className = '',
  download,
  type = 'button'
}) => {
  const baseClasses = 'inline-block px-6 py-3 font-bold text-sm uppercase tracking-wider transition-all duration-300';
  const variantClasses = {
    primary: 'bg-[#61DAFB] text-[#0F1112] hover:bg-transparent hover:text-[#61DAFB] border-2 border-[#61DAFB]',
    secondary: 'bg-transparent text-white hover:bg-white hover:text-[#0F1112] border-2 border-white',
    outline: 'bg-transparent text-[#61DAFB] hover:bg-[#61DAFB] hover:text-[#0F1112] border-2 border-[#61DAFB]'
  };
  const allClasses = `${baseClasses} ${variantClasses[variant]} ${className}`;
  if (to) {
    return <Link to={to} className={allClasses}>
        {children}
      </Link>;
  }
  if (href) {
    return <a href={href} className={allClasses} download={download} target={!download ? '_blank' : undefined} rel="noopener noreferrer">
        {children}
      </a>;
  }
  return <button type={type} onClick={onClick} className={allClasses}>
      {children}
    </button>;
};
export default Button;