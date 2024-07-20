'use client';
import { motion } from 'framer-motion';
import { useLockBodyScroll } from '@uidotdev/usehooks';

import { cn } from '@/lib/utils';
import { FadeText } from '@/components/magicui/fade-text';
import Link from 'next/link';
import { NavbarComponentProps } from '@/components/navbar/ui/navbar-component';

export default function NavbarMobileMenu({
    items,
    className,
}: NavbarComponentProps & React.HTMLAttributes<HTMLDivElement>) {
    useLockBodyScroll();
    return (
        <motion.div
            initial={{
                y: '100%',
            }}
            animate={{
                y: 0,
            }}
            exit={{
                y: '100%',
            }}
            transition={{
                duration: 0.1,
                ease: 'easeOut',
            }}
            className={cn(
                'bg-white absolute top-[80px] w-full left-0 h-[calc(100vh-80px)]',
                className,
            )}
        >
            <div className="w-full h-full flex justify-center text-3xl text-center">
                <div className="flex flex-col gap-6 mt-6">
                    {items.map((item, i) => (
                        <Link
                            className="font-medium"
                            href={item.href}
                            key={item.href}
                        >
                            <FadeText
                                text={item.value}
                                direction="left"
                                framerProps={{
                                    show: {
                                        transition: {
                                            delay: 0.2 + i * 0.1,
                                            ease: 'easeOut',
                                        },
                                    },
                                }}
                            />
                        </Link>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
