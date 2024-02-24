
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronRight } from "@fortawesome/free-solid-svg-icons";
import CircleIcon from "../Icons/CircleIcon";
import { AccordianProps } from "@/types";

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

