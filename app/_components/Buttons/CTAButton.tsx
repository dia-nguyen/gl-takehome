import { CTAButtonProps } from "@/types";
import Link from "next/link";

/**
 * CTAButton Component
 *
 * This component renders a call-to-action button
 *
 * Props:
 * - href (string): URL for navigating to
 * - label (string): Button Label
 * - variant (string): Button style like "primary", "secondary" or "dark"
 *
 * The component uses the `Link` component from Next.js for client-side navigation, enhancing
 * the user experience with fast, JavaScript-powered navigation between pages.
 *
 * Usage:
 * <CTAButton
 *   href="/register"
 *   label="Register Now"
 *   variant="secondary"
 * />
 * Header -> CTAButton
 */
export default function CTAButton({ href, label, variant }: CTAButtonProps) {
  const variants: variantsType = {
    primary: "bg-[#E3DFD6] text-[#6A5930] font-medium",
    secondary: "border border-[#6A5930] text-[#6A5930] font-medium",
    dark: "bg-[#2F2F2F] text-white"
  };
  return (
    <Link href={href} className={`rounded-lg px-6 py-2 ${variants[variant]}`}>{label}</Link>
  );
}

type variantsType = {
  primary: string;
  secondary: string;
  dark: string;
};