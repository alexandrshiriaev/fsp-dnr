import BannersCarousel from '@/components/navigation-carousel/ui/banners-carousel';
import { BannersCarouselItem } from '@/components/navigation-carousel/types';

const navigationCarouselItems: BannersCarouselItem[] = [
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
