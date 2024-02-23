import Image from "next/image";
import Link from "next/link";

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
export default function Logo(){
  return(
    <Image src="/assets/logo.png" alt="Generation Lab" width={100} height={30}/>
  )
}