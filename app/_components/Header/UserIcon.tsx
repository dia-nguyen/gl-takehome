import Image from "next/image";

/**
 * UserIcon Component
 *
 * Renders the user profile icon
 *
 * Child component:
 * - Image
 *
 * Usage: <UserIcon/>
 * Header -> UserIcon
 */
export default function UserIcon(){
  return (
    <Image src="/assets/profile-img.png" alt="profile image" width={40} height={40}/>
  )
}