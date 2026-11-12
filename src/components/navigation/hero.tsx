import Image from "next/image"

export default function NavigationHero() {
    return (
        <div className="flex items-center gap-4">
            <a rel="noopener noreferrer" href="/">
                <Image src="/assets/images/logo.png" alt="RambAI Logo" width={48} height={48} priority className="rounded-2xl" />
            </a>
            <p>RambAI</p>
        </div>
    )
}