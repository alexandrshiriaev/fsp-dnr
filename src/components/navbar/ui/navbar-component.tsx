import NavbarDesktop from '@/components/navbar/ui/navbar-desktop';
import NavbarMobile from '@/components/navbar/ui/navbar-mobile';
import { NavbarItem } from '@/components/navbar';

export type NavbarComponentProps = {
    items: NavbarItem[];
};

export default function NavbarComponent({ items }: NavbarComponentProps) {
    return (
        <div className="z-10 sticky top-0">
            <NavbarDesktop className="hidden md:block" items={items} />
            <NavbarMobile className="block md:hidden" items={items} />
        </div>
    );
}
