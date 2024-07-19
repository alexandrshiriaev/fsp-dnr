import { cn } from '@/lib/utils';

type DotCarouselNavigationGroupProps = {
    count: number;
    current: number;
    // eslint-disable-next-line no-unused-vars
    scrollTo: (index: number) => void;
};

export default function DotCarouselNavigationGroup({
    count,
    current,
    scrollTo,
}: DotCarouselNavigationGroupProps) {
    return (
        <div className="flex justify-center gap-2 mt-2">
            {Array.from({ length: count }).map((_, index) => (
                <button
                    onClick={() => {
                        scrollTo(index);
                    }}
                    key={index}
                    className={cn(
                        'block w-2 h-2 rounded-full ease-out duration-200 hover:bg-slate-800',
                        current - 1 == index ? 'bg-slate-800' : 'bg-gray-400',
                    )}
                />
            ))}
        </div>
    );
}
