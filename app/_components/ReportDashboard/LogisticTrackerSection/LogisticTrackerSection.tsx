"use client";
import { useState } from "react";
import Section from "../../Section/SectionCard";
import Accordion from "../../Accordion/Accordion";
import CTAButton from "../../Buttons/CTAButton";

export default function LogisticTrackSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);

  return (
    <Section
      classNames={""}
      title="Logistic tracker"
      isExpanded={isExpanded}
      handleClick={() => setIsExpanded(prev => !prev)}
    >
      {isExpanded && (
        <>
          <p className="text-xs text-neutral-400">You are currently on your 2nd test</p>

          {LOGISTICS_DATA.map((category, index) => (
            <Accordion
              key={index}
              label={category.label}
              color="gray"
              icon={category.icon}
            >
              {category.button && (
                <div className="text-center">
                  <CTAButton variant="dark" href={category.button.href} label={category.button.label} />
                </div>
              )}
            </Accordion>
          ))}

          <span className="text-xs mt-3 text-neutral-400">Finished Task</span>
          <Accordion

            label={COMPLETED_LOGISTICS_TASK.label}
            icon={COMPLETED_LOGISTICS_TASK.icon}
            color="gray"
            isComplete={COMPLETED_LOGISTICS_TASK.isComplete}
          />
        </>
      )}
    </Section>
  );
}

export const LOGISTICS_DATA = [
  {
    label: "Kit registration",
    icon: "/assets/icons/kit.svg",
    isComplete: false,
    button: {
      href: "/",
      label: "Register Kit"
    }
  },
  {
    label: "Sample collection",
    icon: "/assets/icons/sample.svg",
    isComplete: false,
  },
  {
    label: "Test kit return",
    icon: "/assets/icons/return.svg",
    isComplete: false,
  },
  {
    label: "Test & report",
    icon: "/assets/icons/report.svg",
    isComplete: false,
  }
];

export const COMPLETED_LOGISTICS_TASK = {
  label: "Test kit delivered",
  icon: "/assets/icons/check.svg",
  isComplete: true,
};