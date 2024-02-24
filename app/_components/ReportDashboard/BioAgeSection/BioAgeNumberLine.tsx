"use client";

import { getAgeDifference } from "@/app/_utils/helpers";
import { AgeProps } from "@/types";
import NumberLineChart from "./NumberLineChart";
import gsap from "gsap";
import { useEffect } from "react";

export default function BioAgeNumberLine({ ages }: AgeProps) {
  useEffect(() => {
    gsap.fromTo('#bar-wrapper', { width: '0%' }, { width: '100%', duration: 1.5, ease: 'power3.out' });
  }, []);

  const { chronoAge, bioAge } = ages;
  return (
    <div className="py-5">
      <div className="bg-orange rounded-full text-white p-1 text-center mt-10" id="bar-wrapper">
        <NumberLineChart ages={ages} />
      </div>
      <p className="text-xs text-brown mt-3 mx-3">
        {getAgeDifference(bioAge, chronoAge)}
      </p>
    </div>
  );
}
