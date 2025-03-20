import type { HTMLAttributes } from 'react';
import { cn } from '../lib/utils';
import type { FeaturesDataType } from '../types';
import { TextButton } from './text-button';

interface Props extends HTMLAttributes<HTMLDivElement> {
    data: FeaturesDataType;
}

export const FeaturesCard = ({ data, ...rest }: Props) => {
    const { image, title, description, color } = data;

    return (
        <div className="group relative z-0 max-w-xs p-8 md:max-w-md md:p-10" {...rest}>
            <div
                className={cn(
                    'absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 opacity-0 blur-lg transition-all duration-300 group-hover:opacity-100',
                    color === 'lime' && 'bg-lime-500',
                    color === 'cyan' && 'bg-cyan-500',
                    color === 'violet' && 'bg-violet-500'
                )}
            />
            <div
                className={cn(
                    'absolute right-1.5 top-1.5 -z-10 size-16 rounded-xl bg-fuchsia-500 transition-all duration-300 group-hover:bg-fuchsia-400',
                    color === 'lime' && 'bg-lime-500 group-hover:bg-lime-400',
                    color === 'cyan' && 'bg-cyan-500 group-hover:bg-cyan-400',
                    color === 'violet' && 'bg-violet-500 group-hover:bg-violet-400'
                )}
            />
            <div className="absolute inset-0 -z-10 rounded-2xl bg-zinc-800 [mask-image:linear-gradient(225deg,transparent,transparent_40px,black_40px)]" />

            <div className="-mt-28 flex justify-center">
                <div className="relative inline-flex">
                    <div className="absolute top-[calc(100%+16px)] h-4 w-full rounded-[100%] bg-zinc-950/70 transition-all duration-300 [mask-image:radial-gradient(closest-side,black,transparent)] group-hover:bg-zinc-950/30" />

                    <img
                        src={image}
                        alt="card img"
                        className="size-40 transition-all duration-300 group-hover:-translate-y-6"
                    />
                </div>
            </div>

            <h3 className="mt-12 font-heading text-3xl font-black">{title}</h3>
            <p className="mt-4 text-lg text-zinc-400">{description}</p>
            <div className="mt-12 flex items-center justify-between">
                <TextButton color={color}>Learn more</TextButton>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                    className="size-8 -translate-x-2 text-zinc-500 transition-all duration-300 group-hover:translate-x-0 group-hover:text-zinc-300"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M17.25 8.25 21 12m0 0-3.75 3.75M21 12H3"
                    />
                </svg>
            </div>
        </div>
    );
};
