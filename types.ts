export interface NavigationLink {
  href: string;
  label: string;
}

export interface NavigationLinksProps {
  links: NavigationLink[];
}

export interface CTAButtonProps {
  href: string;
  label: string;
  variant: VariantKeys;
}

type variantsType = {
  primary: string;
  secondary: string;
  dark: string;
};

type VariantKeys = keyof variantsType;

export interface CTAButtonsProps {
  links: CTAButtonProps[];
}

export interface SubsectionProps {
  title: string;
  children?: React.ReactNode;
}

export interface CircleIconProps {
  color: string;
  label: string;
  icon: string;
}

export interface AccordianProps {
  label: string;
  children?: React.ReactNode;
  color: string;
  icon: string;
  customText?: string;
  isComplete?: boolean;
}

export interface TodoListProps {
  type: TaskType;
  label: string;
  tasks: TodoTask[];
}

export interface TodoTask {
  task: string;
  isComplete: boolean;
  categoryType?: TaskType;
}

export type TaskType = "medication" | "physicalActivity" | "therapy";

export interface TaskAccordionProps extends TaskCheckListProps {
  label: string;
}

export interface TaskCheckListProps {
  tasks: TodoTask[];
  type: TaskType;
  handleChange: (type: TaskType, task: string, isComplete: boolean) => void;
}

export interface SectionCardProps extends ToggleCardButton {
  classNames?: string;
  children: React.ReactNode;
  title: string;
}

export interface ToggleCardButton {
  isExpanded: boolean;
  handleClick: ({ }) => void;
}

export interface CategoryProps {
  tasks: TodoTask[];
  type: TaskType;
}

export interface AgeTypes {
  chronoAge: number;
  bioAge: number;
}


export interface AgeProps {
  ages: AgeTypes;
}

export interface AgingRate {
  agingRate: number;
}

export interface renderNeedleProps {
  cx: number;
  cy: number;
  radius: number;
  angle: number;
  stroke?: string;
  strokeWidth?: number;
  label?: string;
  fontSize?: number;
}

export interface FinishedTasksProps {
  tasks: TodoTask[];
  handleChange: (categoryType: any, task: string, isComplete: boolean) => void;
}