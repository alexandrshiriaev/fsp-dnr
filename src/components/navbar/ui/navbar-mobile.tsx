'use client';

import Logo from '@/components/navbar/ui/logo';
import { MenuIcon, X } from 'lucide-react';
import { cn } from '@/lib/utils';
import NavbarMobileMenu from '@/components/navbar/ui/navbar-mobile-menu';
import { useCallback, useState } from 'react';
import { AnimatePresence } from 'framer-motion';
import { NavbarComponentProps } from '@/components/navbar/ui/navbar-component';

export default function NavbarMobile({
    items,
    className,
}: NavbarComponentProps & React.HTMLAttributes<HTMLDivElement>) {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        setIsMenuOpen(prevState => !prevState);
    }, [setIsMenuOpen]);

    return (
        <div
            className={cn(
                'border-b mb-2 shadow-sm h-[80px] w-full bg-opacity-85 bg-white backdrop-blur-sm duration-200',
                { 'bg-opacity-100': isMenuOpen },
                className,
            )}
        >
            <div className="max-w-screen-xl mx-auto px-2 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <button onClick={toggleMenu}>
                        {isMenuOpen ? <X /> : <MenuIcon />}
                    </button>
                </div>
                <AnimatePresence>
                    {isMenuOpen && <NavbarMobileMenu items={items} />}
                </AnimatePresence>
            </div>
        </div>
    );
}
