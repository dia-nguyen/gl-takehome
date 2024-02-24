import { CircleIconProps } from "@/types";
import Image from "next/image";

/**
 * CircleIcon Component
 *
 * Renders a circular icon with customizable background color and icon.
 *
 * Props:
 * - color (String): hex color
 * - label (String): alt text
 * - icon (String | Object): Path to icon or image
 *
 * Usage:
 * <CircleIcon
 *   color="blue-500"
 *   label="Task Icon"
 *   icon="/path/to/icon.svg"
 *    or
 *   icon={faUser} // Assuming FontAwesome icon
 * />
*/
export default function CircleIcon({ color, label, icon } : CircleIconProps) {
  return (
    <span className={`bg-${color} text-sm font-semibold w-8 h-8 flex items-center justify-center rounded-full mr-3`}>
      <Image className="h-17 w-17" src={icon} width={17} height={17} alt={`${label} icon`} />
    </span>
  );
}