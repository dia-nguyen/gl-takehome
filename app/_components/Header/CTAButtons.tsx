import { CTAButtonProps, CTAButtonsProps } from "@/types";
import CTAButton from "../Buttons/CTAButton";

/**
 * CTAButtons Component
 *
 * Renders a collection of call-to-action buttons with different styles
 * This component serves as a container for individual CTAButton component.
 *
 * Child component:
 * - CTAButton
 *
 * Props:
 * - links (Array): An array of link objects like
 *    { href: "/", label: "Register Kit", variant:"secondary" },{ href: "/", label: "Buy Kit", variant:"primary"}]
 *
 * Usage:
 * <CTAButtons links={} />
 * Header -> CTAButtons -> CTAButton
 */
export default function CTAButtons({links}:CTAButtonsProps){
  return (
    <div className="flex gap-4 justify-center">
      {links.map((link: CTAButtonProps) => (
        <CTAButton label={link.label} href={link.href} variant={link.variant} key={link.label}/>
      ))}
    </div>
  )
}

