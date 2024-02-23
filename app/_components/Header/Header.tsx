import Logo from "./Logo";
import { HEADER_CTA_LINKS, NAVIGATION_LINKS } from "@/app/_utils/staticData";
import NavigationLinks from "./NavigationLinks";
import UserIcon from "./UserIcon";
import CTAButtons from "./CTAButtons";

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
    <header className="bg-white">
      <div className="container justify-between mx-auto flex items-center">
        <div className="flex-grow">
          <Logo />
        </div>
        <div className="flex-shrink-0 flex items-center gap-8">
          <NavigationLinks links={NAVIGATION_LINKS} />
          <CTAButtons links={HEADER_CTA_LINKS}/>
          <UserIcon/>
        </div>
      </div>
    </header>
  );
}