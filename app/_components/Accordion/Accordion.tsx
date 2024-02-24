
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CircleIcon from "../Icons/CircleIcon";
import { AccordianProps } from "@/types";

/**
 * Accordion Component
 *
 * Renders an accordion with a customizable header, including an optional icon,
 * label, and additional text. The accordion can be expanded or collapsed to show
 * or hide its content. It supports custom colors and displays a circle icon
 * next to the label.
 *
 * Props:
 * - label (String): The text label displayed in the accordion header.
 * - children (Node): The content to display when the accordion is expanded.
 * - color (String): The color of the circle icon in the accordion header.
 * - icon (IconDefinition): The FontAwesome icon displayed inside the circle icon.
 * - customText (String): Additional text displayed next to the expand/collapse button.
 * - isComplete (Boolean): If true, applies an opacity style to indicate completion.
 *
 * Usage:
 * <Accordion
 *   label="Section Title"
 *   color="blue"
 *   icon={faExampleIcon}
 *   customText="Additional Info"
 *   isComplete={false}
 * >
 *   <p>Accordion content goes here...</p>
 * </Accordion>
 */
export default function Accordion({ label, children, color, icon, customText, isComplete }: AccordianProps) {
  const [isExpanded, setIsExpanded] = useState(true);

  return (
    <div className={`bg-light rounded-lg p-3 grid gap-3 ${isComplete && "opacity-30"}`}>
      {/* Accordian Header */}
      <div className="flex-center justify-between">
        <div className="flex-center">
          <CircleIcon color={color} label={label} icon={icon} />
          <span className="text-sm font-medium">{label}</span>
        </div>
        <span className="text-sm">
          {customText}
          <button
            className="fa-fw ml-2 mr-1"
            aria-label="Toggle accordion"
            onClick={() => setIsExpanded(prev => !prev)}
          >
            <FontAwesomeIcon icon={isExpanded ? faChevronDown : faChevronRight} size="xs" />
          </button>
        </span>
      </div>
      {/* Accordian Content */}
      {isExpanded && children}
    </div>
  );
}

