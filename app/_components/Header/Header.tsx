import Logo from "./Logo";
import { NAVIGATION_LINKS } from "@/app/_utils/staticData";
import NavigationLinks from "./NavigationLinks";
import UserIcon from "./UserIcon";

/**
 * Header Component
 *
 * Renders the header section fo the page.
 * Includes logo, navigation links and buttons, and user information (image)
 *
 * Child components:
 * - Logo
 * - NavigationLinks
 * - CTAButtons
 * - UserIcon
 *
 * Usage: <Header/>
 * Home -> Header
 */
export default function Header() {
  return (
    <header className="bg-white md:relative fixed top-0 w-full z-30">
      <div className="container md:max-w-5xl max-w-md md:py-0 py-2 justify-between mx-auto flex items-center">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="flex-shrink-0 flex items-center md:gap-8 gap-4">
          <NavigationLinks links={NAVIGATION_LINKS} />
          <UserIcon/>
        </div>
      </div>
    </header>
  );
}