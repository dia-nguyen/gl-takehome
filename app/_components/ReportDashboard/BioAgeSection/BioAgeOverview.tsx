import { AgeProps, AgeTypes } from "@/types";
import dynamic from "next/dynamic";
import Subsection from "./Subsection";

const BioAgeNumberLine = dynamic(()=> import('./BioAgeNumberLine'), {ssr: false})

export default function BioAgeOverview({ ages }: AgeProps) {
  return (
    <div className="text-center">
      <Subsection title="BioAge Overview">
        <BioAgeNumberLine ages={ages} />
      </Subsection>
    </div>
  );
}