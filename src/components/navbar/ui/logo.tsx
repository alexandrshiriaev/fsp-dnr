import Link from 'next/link';
import Image from 'next/image';

export default function Logo() {
    return (
        <Link href="/" className="flex items-center justify-center">
            <Image
                src="/fsp.svg"
                alt="Логотип ФСП ДНР"
                width={140}
                height={140}
            />
            <span className="hidden md:inline">
                федерация спортивного
                <br />
                программирования ДНР
            </span>
        </Link>
    );
}
