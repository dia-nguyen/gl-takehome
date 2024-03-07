"use client";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons/faChevronRight";
import { faChevronDown, faCircle } from "@fortawesome/free-solid-svg-icons";
import { SectionCardProps, ToggleCardButton } from "@/types";
import gsap from "gsap";
import { useEffect } from "react";

/**
 * Section Card
 */
export default function SectionCard({ classNames, children, title, isExpanded, handleClick }: SectionCardProps) {

  useEffect(() => {
    gsap.fromTo('section',
      { y: -50, opacity: 0 },
      { y: 0, opacity: 1, duration: 1.5, ease: 'power3.out', stagger: 0.2 }
    );
  }, []);

  return (
    <section className={`section bg-white rounded-2xl p-5 grid gap-3 self-start ${classNames}`}>
      <div className="flex items-center justify-between">
        <p className="text-xl font-bold">{title}</p>
        <ToggleCardButton isExpanded={isExpanded} handleClick={handleClick} />
      </div>
      {children}
    </section>
  );
}

function ToggleCardButton({ isExpanded, handleClick }: ToggleCardButton) {
  return (
    <button className="p-5 fa-layers fa-fw" onClick={handleClick} aria-label="Toggle card">
      <FontAwesomeIcon icon={faCircle} size="2xl" color="#F7F6F6" />
      {/* TODO: either swap between icons or rotate */}
      <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} size="sm" />
    </button>
  );
}
