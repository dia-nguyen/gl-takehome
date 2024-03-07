import dynamic from "next/dynamic";
import Subsection from "./Subsection";
const TopAgingFactorsPie = dynamic(()=> import('./TopAgingFactorsPie'), {ssr: false})

/**
 * Top Aging Factors Section
 */
export default function TopAgingFactors() {
  return (

    <Subsection title="Top Aging Factors">
       <div className="flex-center gap-3">
        <div className="h-[150px] w-[150px]"><TopAgingFactorsPie/></div>
        <p className="text-xs text-left text-brown">Inflammatory regulation</p>
      </div>
    </Subsection>
  );
}

