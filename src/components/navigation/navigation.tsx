import NavigationHero from "./hero";
import NavigationBarContent from "./NavigationContent";

export default function NavigationBar() {
    return (
        <nav className="flex justify-between items-center">
            <NavigationHero/>
            <NavigationBarContent/>
        </nav>
    )
}