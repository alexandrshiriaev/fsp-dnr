import Link from 'next/link';
import Logo from '@/components/navbar/ui/logo';
import { cn } from '@/lib/utils';
import { NavbarComponentProps } from '@/components/navbar/ui/navbar-component';

export default function NavbarDesktop({
    items,
    className,
}: NavbarComponentProps & React.HTMLAttributes<HTMLDivElement>) {
    return (
        <div
            className={cn(
                'border-b mb-2 shadow-sm h-[80px] w-full bg-white opacity-90 backdrop-blur-3xl',
                className,
            )}
        >
            <div className="max-w-screen-xl mx-auto px-2 py-4">
                <div className="flex items-center justify-between">
                    <Logo />
                    <nav className="flex gap-6 font-medium">
                        {items.map(item => (
                            <Link key={item.href} href={item.href}>
                                {item.value}
                            </Link>
                        ))}
                    </nav>
                </div>
            </div>
        </div>
    );
}
