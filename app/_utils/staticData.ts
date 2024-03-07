import { CTAButtonProps, TodoListProps } from "@/types";

export const NAVIGATION_LINKS = [
  { href: "/", label: "Dashboard" },
  { href: "/", label: "Report" },
  { href: "/", label: "Tele-health" },
  { href: "/", label: "To-dos" },
];

export const HEADER_CTA_LINKS = [
  { href: "/", label: "Register Kit", variant: "secondary" },
  { href: "/", label: "Buy Kit", variant: "primary" },
] as CTAButtonProps[];

export const TASK_TYPE_ICONS = {
  medication: {
    icon: "/assets/icons/medication.svg",
    color: "yellow",
  },
  physicalActivity: {
    icon: "/assets/icons/physical-activity.svg",
    color: "purple",
  },
  therapy: {
    icon: "/assets/icons/therapy.svg",
    color: "teal",
  },
};


export const DEFAULT_TODO_LIST = [
  {
    type: "medication",
    label: "Medication",
    tasks: [
      {
        task: "No Alcoholic drinks today",
        isComplete: false
      },
      {
        task: "Replace a processed meat with leaner proteins",
        isComplete: false
      },
      {
        task: "Use cold-pressed olive oil or avocado oil instead of refined oils",
        isComplete: true
      },
      {
        task: "Include non-starchy vegetables with every meal",
        isComplete: true
      },
    ]
  },
  {
    type: "physicalActivity",
    label: "Physical Activity",
    tasks: []
  },
  {
    type: "therapy",
    label: "Therapy",
    tasks: [],
  },
] as TodoListProps[];


export const AGING_FACTORS_REPORT = [
  { name: "Inflamatory Regulation", value: 100, color: "#DE6430" },
];

export const AGE_DATA = {
  chronoAge: 30,
  bioAge: 50
}