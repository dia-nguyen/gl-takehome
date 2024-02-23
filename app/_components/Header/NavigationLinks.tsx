
/**
 * NavigationLinks Component
 *
 * Renders a collection of navigation links as part of the header section.
 * This component serves as a container for individual NavigationLink components.
 *
 * Child component:
 * - Link
 *
 * Props:
 * - links (Array): An array of link objects like [{href="/dashboard", label: "dashboard"},{href="report", "label:report"}]
 *
 * Usage:
 * <NavigationLinks links={} />
 * Header -> NavigationLinks -> NavigationItem
 */

import { NavigationLink, NavigationLinksProps } from "@/types";
import Link from "next/link";

export default function NavigationLinks({links}: NavigationLinksProps) {
  return (
    <nav className="flex items-center gap-x-8">
      {links.map((link: NavigationLink) => (
        <Link
          href={link.href}
          key={link.label}
          // the link.label is used to emulate the currently active page
          className={`
            ${link.label === "Report" ? "before:absolute before:h-[2px] before:bottom-0 before:w-full before:bg-base font-medium" : "text-neutral-400 hover:text-neutral-500"}
            transition-colors ease-in-out relative py-6
          `}>
            {link.label}
          </Link>
      ))}
    </nav>
  )
}
