import { ButtonHTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: 'primary' | 'ghost' | 'outline';
};

export function Button({ className, variant = 'primary', ...props }: ButtonProps) {
  return (
    <button
      className={cn(
        'rounded-xl px-4 py-2 text-sm font-medium transition',
        variant === 'primary' && 'bg-accent text-white hover:bg-blue-500',
        variant === 'ghost' && 'bg-transparent text-slate-200 hover:bg-white/10',
        variant === 'outline' && 'border border-white/20 text-slate-100 hover:border-white/40',
        className
      )}
      {...props}
    />
  );
}
