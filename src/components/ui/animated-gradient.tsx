'use client';

import { cn } from '@/lib/utils';

export function AnimatedGradientText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        'bg-gradient-to-r from-[#c4f542] via-[#f9d423] to-[#c4f542] bg-[length:200%_auto] bg-clip-text text-transparent animate-gradient',
        className
      )}
    >
      {children}
    </span>
  );
}
