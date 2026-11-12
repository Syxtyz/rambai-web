import NavigationHero from "./hero";
import NavigationBarContent from "./NavigationContent";

export default function NavigationBar() {
    return (
        <nav className="flex flex-row">
            <NavigationHero/>
            <NavigationBarContent/>
        </nav>
    )
}