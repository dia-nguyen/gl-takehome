import Image from "next/image";

/**
 * Logo Component
 *
 * Renders the company logo
 *
 * Child component:
 * - Image
 *
 * Usage: <Logo/>
 * Header -> Logo
 */
export default function Logo() {
  return (
    <Image src="/assets/logo.png"
      sizes="100vw"
      alt="Generation Lab"
      className="h-[40px] w-auto"
      width={100}
      priority
      height={40} />
  );
}