'use client';

import { cn } from '@/lib/utils';
import { ReactNode } from 'react';

interface BentoGridProps {
  className?: string;
  children?: ReactNode;
}

interface BentoCardProps {
  name: string;
  className?: string;
  background?: ReactNode;
  Icon?: React.ElementType;
  description: string;
  href?: string;
  cta?: string;
}

export function BentoGrid({ className, children }: BentoGridProps) {
  return (
    <div
      className={cn(
        'grid w-full auto-rows-[22rem] grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4',
        className
      )}
    >
      {children}
    </div>
  );
}

export function BentoCard({
  name,
  className,
  background,
  Icon,
  description,
  href,
  cta,
}: BentoCardProps) {
  return (
    <div
      className={cn(
        'group relative col-span-1 flex flex-col justify-between overflow-hidden rounded-2xl',
        'bg-white dark:bg-zinc-900',
        'border border-zinc-200 dark:border-zinc-800',
        'transform-gpu transition-all duration-300',
        'hover:shadow-xl hover:shadow-black/5 hover:-translate-y-1',
        className
      )}
    >
      <div className="absolute inset-0">{background}</div>
      <div className="pointer-events-none z-10 flex transform-gpu flex-col gap-1 p-6 transition-all duration-300 group-hover:-translate-y-1">
        {Icon && (
          <div className="mb-2 w-12 h-12 rounded-xl bg-[#1a2f25] flex items-center justify-center">
            <Icon className="h-6 w-6 text-[#c4f542]" />
          </div>
        )}
        <h3 className="text-xl font-semibold text-zinc-900 dark:text-white">{name}</h3>
        <p className="text-sm text-zinc-600 dark:text-zinc-400 max-w-lg">{description}</p>
      </div>
      {href && cta && (
        <div className="pointer-events-none z-10 flex items-center p-6 pt-0">
          <a
            href={href}
            className="pointer-events-auto text-sm font-medium text-[#1a2f25] dark:text-[#c4f542] hover:underline"
          >
            {cta} →
          </a>
        </div>
      )}
    </div>
  );
}
