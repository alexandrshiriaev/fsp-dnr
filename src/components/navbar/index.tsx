import NavbarDesktop from '@/components/navbar/ui/navbar-desktop';
import NavbarMobile from '@/components/navbar/ui/navbar-mobile';
import NavbarComponent from '@/components/navbar/ui/navbar-component';

export type NavbarItem = {
    value: string;
    href: string;
};

const navbarItems: NavbarItem[] = [
    {
        value: 'О федерации',
        href: '/about',
    },
    {
        value: 'Дисциплины',
        href: '/disciplines',
    },
    {
        value: 'Галерея',
        href: '/gallery',
    },
    {
        value: 'Контакты',
        href: '/contacts',
    },
];

export default function Navbar() {
    return <NavbarComponent items={navbarItems} />;
}
