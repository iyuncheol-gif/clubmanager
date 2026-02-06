import React from 'react';
import { ArrowRight } from 'lucide-react';

type BaseProps = {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  withArrow?: boolean;
  className?: string;
};

type ButtonAsButton = BaseProps &
  Omit<React.ButtonHTMLAttributes<HTMLButtonElement>, keyof BaseProps> & {
    href?: undefined;
  };

type ButtonAsLink = BaseProps &
  Omit<React.AnchorHTMLAttributes<HTMLAnchorElement>, keyof BaseProps> & {
    href: string;
  };

type ButtonProps = ButtonAsButton | ButtonAsLink;

const Button: React.FC<ButtonProps> = (props) => {
  const { 
    children, 
    variant = 'primary', 
    size = 'md', 
    withArrow = false,
    className = '',
    ...rest 
  } = props;

  const baseStyles = "inline-flex items-center justify-center font-semibold transition-all duration-300 rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-midnight focus:ring-turf active:scale-95 cursor-pointer";
  
  const variants = {
    primary: "bg-turf text-midnight hover:bg-turf-dark hover:text-white shadow-[0_0_20px_rgba(16,185,129,0.3)] hover:shadow-[0_0_30px_rgba(16,185,129,0.5)]",
    secondary: "bg-white text-midnight hover:bg-gray-100",
    outline: "border border-white/20 text-white hover:bg-white/10 hover:border-white/40",
    ghost: "text-gray-400 hover:text-white hover:bg-white/5",
  };

  const sizes = {
    sm: "px-4 py-2 text-sm",
    md: "px-6 py-3 text-base",
    lg: "px-8 py-4 text-lg",
  };

  const classes = `${baseStyles} ${variants[variant]} ${sizes[size]} ${className}`;

  if (props.href) {
    // Explicitly casting rest to anchor props since we know href exists
    const linkProps = rest as React.AnchorHTMLAttributes<HTMLAnchorElement>;
    return (
      <a href={props.href} className={classes} {...linkProps}>
        {children}
        {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
      </a>
    );
  }

  // Explicitly casting rest to button props
  const buttonProps = rest as React.ButtonHTMLAttributes<HTMLButtonElement>;
  return (
    <button className={classes} {...buttonProps}>
      {children}
      {withArrow && <ArrowRight className="ml-2 w-4 h-4" />}
    </button>
  );
};

export default Button;