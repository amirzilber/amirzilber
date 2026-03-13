import { HTMLAttributes } from 'react';
import { cn } from '@/lib/utils';

export function Badge({ className, ...props }: HTMLAttributes<HTMLSpanElement>) {
  return <span className={cn('rounded-full border border-white/20 px-2 py-1 text-xs text-slate-200', className)} {...props} />;
}
