import BannersCarousel from '@/components/navigation-carousel/ui/banners-carousel';
import { BannersCarouselItemProps } from '@/components/navigation-carousel/ui/banners-carousel-item';

const navigationCarouselItems: BannersCarouselItemProps[] = [
    {
        title: 'Первый слайд',
        href: '/1',
    },
    {
        title: 'Второй слайд',
        href: '/2',
    },
    {
        title: 'Третьий слайд',
        href: '/3',
    },
    {
        title: 'Четвёртый слайд',
        href: '/4',
    },
    {
        title: 'Пятый слайд',
        href: '/5',
    },
];

export default function NavigationCarousel() {
    return <BannersCarousel items={navigationCarouselItems} />;
}
