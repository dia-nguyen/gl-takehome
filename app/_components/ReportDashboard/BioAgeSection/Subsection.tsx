import { useState, useEffect } from "react";
import SubsectionSkeleton from "../../Skeleton/Skeleton";
import { SubsectionProps } from "@/types";

export default function Subsection({ title, children }: SubsectionProps) {
  const [isLoading, setIsLoading] = useState(true);
  const [showSkeleton, setShowSkeleton] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);

      const fadeOutTimer = setTimeout(() => {
        setShowSkeleton(false);
      }, 500);

      return () => clearTimeout(fadeOutTimer);
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="text-center mx-auto max-w-xs">
      <p className="font-bold mb-8">{title}</p>
      {showSkeleton ? (
        <div className={isLoading ? "" : ""}>
          <SubsectionSkeleton />
        </div>
      ) : (
        <div className="fade-in h-[150px]">
          {children}
        </div>
      )}
    </div>
  );
}
