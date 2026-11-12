import Image from "next/image";
import Link from "next/link";

export default function NavigationHero() {
    return (
        <Link className="inline-flex shrink-0 items-center gap-2.5" href="/" aria-label="RambAI home">
            <Image
                src="/assets/images/logo.png"
                alt="RambAI Logo"
                width={48}
                height={48}
                priority
                className="rounded-2xl"
            />
                <span className="block text-[1.07rem] leading-[1.05] font-extrabold tracking-[-0.04em]">RambAI</span>
        </Link>
    );
}
