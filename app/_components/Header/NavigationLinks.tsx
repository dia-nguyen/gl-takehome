"use client";

import CTAButtons from "./CTAButtons";
import { HEADER_CTA_LINKS } from "@/app/_utils/staticData";
import { NavigationLink, NavigationLinksProps } from "@/types";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import { useEffect, useState } from "react";

/**
 * NavigationLinks Component
 *
 * Renders a collection of navigation links as part of the header section.
 * This component serves as a container for individual NavigationLink components and CTA buttons.
 * This components renders
 *
 * Child component:
 * - Link
 * - CTA Buttons
 *
 * Props:
 * - links (Array): An array of link objects like [{href="/dashboard", label: "dashboard"},{href="report", "label:report"}]
 *
 * Usage:
 * <NavigationLinks links={} />
 * Header -> NavigationLinks -> NavigationItem
 */
export default function NavigationLinks({ links }: NavigationLinksProps) {
  // Helper function to check if the current window width is mobile size
  // const isMobileSize = () => window.innerWidth <= 768; // or your mobile breakpoint

  const [isMobile, setIsMobile] = useState(false);
  const [showMobileNav, setShowMobileNav] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => setIsMobile(window.innerWidth <= 768);
    window.addEventListener('resize', handleWindowResize);
    handleWindowResize();
    return () => window.removeEventListener('resize', handleWindowResize);
  }, []);

  const toggleMobileNav = () => setShowMobileNav((prev) => !prev);

  const renderMobileButton = () => (
    <button
      className="rounded-lg px-5 py-2 border border-[#6A5930] text-[#6A5930] md:hidden z-20"
      onClick={toggleMobileNav}
      aria-label="Toggle mobile navigation"
    >
      <FontAwesomeIcon icon={faBars} />
    </button>
  );

  const renderDesktopNav = () => (
    <div className="hidden md:flex items-center md:gap-x-8 gap-x-2 flex-col md:flex-row">

      {links.map((link: NavigationLink) => (
        <Link href={link.href} key={link.label}
          className={`${link.label === "Report"
              ? "before:absolute before:h-[2px] before:bottom-0 before:w-full before:bg-base font-medium"
              : "text-neutral-400 hover:text-neutral-500"
            } transition-colors ease-in-out relative py-6`}
        >
          {link.label}
        </Link>
      ))}
      <CTAButtons links={HEADER_CTA_LINKS} />
    </div>
  );

  const renderMobileNav = () => (
    <div className="flex items-center md:gap-x-8 gap-x-2 flex-col md:flex-row">
      <div className="w-full fixed inset-0 top-[60px] z-10">
        <div className="flex flex-col text-center bg-white pb-5 border-b border-gray">
          {links.map((link: NavigationLink) => (
            <Link href={link.href} key={link.label}
              className={`${link.label === "Report" ? "font-medium" : "text-neutral-400 hover:text-neutral-500"
                } transition-colors ease-in-out relative py-3`}
            >
              {link.label}

            </Link>
          ))}
          <CTAButtons links={HEADER_CTA_LINKS} />
        </div>
      </div>
    </div>
  );

  return (
    <nav>
      {renderMobileButton()}
      {isMobile ? showMobileNav && renderMobileNav() : renderDesktopNav()}
    </nav>
  );
}