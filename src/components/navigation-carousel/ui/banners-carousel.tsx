'use client';

import { useEffect, useState } from 'react';
import {
    Carousel,
    CarouselApi,
    CarouselContent,
} from '@/components/shadcnui/carousel';
import Autoplay from 'embla-carousel-autoplay';

import DotCarouselNavigationGroup from '@/components/navigation-carousel/ui/dot-carousel-navigation-group';
import {
    BannersCarouselItem,
    BannersCarouselItemProps,
} from '@/components/navigation-carousel/ui/banners-carousel-item';

type BannersCarouselProps = {
    items: BannersCarouselItemProps[];
};

export default function BannersCarousel({ items }: BannersCarouselProps) {
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
                    delay: 6000,
                }),
            ]}
        >
            <CarouselContent className="ml-0">
                {items.map(item => (
                    <BannersCarouselItem key={item.href} {...item} />
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
