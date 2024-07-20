import Link from 'next/link';
import { CarouselItem } from '@/components/shadcnui/carousel';
import { memo } from 'react';

export type BannersCarouselItemProps = {
    title: string;
    href: string;
    image?: string;
};

// eslint-disable-next-line react/display-name
export const BannersCarouselItem = memo(
    ({ title, href, image }: BannersCarouselItemProps) => {
        return (
            <CarouselItem className="px-2">
                <Link
                    href={href}
                    className="w-full h-[200px] rounded-2xl px-2 bg-slate-800 block"
                >
                    <span className="text-white">{title}</span>
                </Link>
            </CarouselItem>
        );
    },
);
