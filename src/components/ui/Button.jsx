import React from 'react';

const variants = {
  primary: "bg-primary text-on-primary hover:bg-primary-dim active:scale-95 transition-all",
  surface: "bg-surface-bright text-on-surface hover:bg-surface-container transition-colors",
  outline: "border border-surface-bright/40 text-surface-bright hover:bg-surface-bright/10 transition-colors",
  outlineDark: "border border-outline-variant/30 text-on-surface hover:bg-on-surface hover:text-surface-bright transition-all",
  secondary: "bg-surface-bright text-secondary hover:bg-surface-container transition-colors"
};

const sizes = {
  sm: "px-6 py-3 text-xs",
  md: "px-8 py-4 text-xs",
  lg: "px-10 py-5 text-sm",
  xl: "px-12 py-5 text-xs"
};

export const Button = ({ 
  children, 
  variant = 'primary', 
  size = 'md', 
  className = '', 
  ...props 
}) => {
  return (
    <button 
      className={`font-label uppercase tracking-widest ${variants[variant]} ${sizes[size]} ${className}`}
      {...props}
    >
      {children}
    </button>
  );
};
