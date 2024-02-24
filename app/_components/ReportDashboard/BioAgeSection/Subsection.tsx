import { SubsectionProps } from "@/types";

export default function Subsection({ title, children }:SubsectionProps) {
  return (
    <div className="text-center mx-auto max-w-xs">
      <p className="font-bold mb-5">{title}</p>
      {children}
    </div>
  );
}