import type { HTMLAttributes, ReactNode } from 'react';
import { cn } from '../lib/utils';

interface Props extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
    className?: string;
}

export const Circle = ({ children, className, ...rest }: Props) => {
    return (
        <div
            className={cn(
                'flex size-[240px] items-center justify-center rounded-full bg-zinc-900 outline outline-[6px] -outline-offset-[6px] outline-fuchsia-500/10',
                className
            )}
            {...rest}
        >
            {children}
        </div>
    );
};
