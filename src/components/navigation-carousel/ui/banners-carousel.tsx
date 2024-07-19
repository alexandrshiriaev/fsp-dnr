'use client';

import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
    CarouselItem,
} from '@/components/ui/carousel';
import Autoplay from 'embla-carousel-autoplay';
import Link from 'next/link';

import { BannersCarouselItem } from '@/components/navigation-carousel/types';
import DotCarouselNavigationGroup from '@/components/navigation-carousel/ui/dot-carousel-navigation-group';

type BannersCarouselProps = {
    items: Array<BannersCarouselItem>;
};

export default function BannersCarousel({ items }: BannersCarouselProps) {
    console.log(items);

    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) {
            return;
        }

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap() + 1);

        api.on('select', () => {
            setCurrent(api.selectedScrollSnap() + 1);
        });
    }, [api]);

    return (
        <Carousel
            setApi={setApi}
            opts={{
                loop: true,
            }}
            plugins={[
                Autoplay({
                    delay: 3000,
                }),
            ]}
        >
            <CarouselContent className="ml-0">
                {items.map(item => (
                    <CarouselItem key={item.href} className="px-2">
                        <Link
                            href={item.href}
                            className="w-full h-[200px] rounded-2xl px-2 bg-slate-800 block"
                        >
                            <span className="text-white">{item.title}</span>
                        </Link>
                    </CarouselItem>
                ))}
            </CarouselContent>
            <DotCarouselNavigationGroup
                count={count}
                current={current}
                scrollTo={index => api?.scrollTo(index)}
            />
        </Carousel>
    );
}
