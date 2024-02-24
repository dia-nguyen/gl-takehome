"use client";

import { useState } from "react";
import Section from "../../Section/SectionCard";
import ChronoTime from "./ChronoTime";
import TopAgingFactors from "./TopAgingFactors";
import BioAgeOverview from "./BioAgeOverview";
import { AGE_DATA } from "@/app/_utils/staticData";

export default function BioAgeSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <Section classNames={"md:col-span-2"} title="Current BioAge & Aging Speed"

      isExpanded={isExpanded}
      handleClick={() => setIsExpanded(prev => !prev)}
    >
      {isExpanded && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-35 gap-y-5">
          <BioAgeOverview ages={AGE_DATA} />
          <ChronoTime ages={AGE_DATA} />
          <TopAgingFactors />
        </div>
      )}
    </Section>
  );
}

