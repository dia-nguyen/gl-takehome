import dynamic from "next/dynamic";
import Subsection from "./Subsection";
import { AgeProps } from "@/types";

const ChronoTimePie = dynamic(() => import('./ChronoTimePie'), { ssr: false });

export default function ChronoTime({ ages }: AgeProps) {
  const { chronoAge, bioAge } = ages;
  const agingRate = (bioAge / chronoAge) * 100;

  return (
    <Subsection title="Chronological Time">
      <div className="p-5 flex-center flex-col">
        <ChronoTimePie agingRate={agingRate} />
        <p className="text-xs mt-4 mx-3 text-brown">You are aging {agingRate.toFixed(0)}% of chronological time</p>
      </div>
    </Subsection>
  );
}
