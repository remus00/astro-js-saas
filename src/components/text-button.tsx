import type { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    className?: string;
    color?: 'lime' | 'cyan' | 'violet' | 'fuchsia';
}

export const TextButton = ({ children, className, color, ...rest }: Props) => {
    return (
        <button
            className={cn(
                'font-heading text-sm font-extrabold uppercase tracking-wider text-fuchsia-500',
                color === 'lime' && 'text-lime-500',
                color === 'cyan' && 'text-cyan-500',
                color === 'violet' && 'text-violet-500'
            )}
        >
            {children}
        </button>
    );
};
