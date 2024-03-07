import { TASK_TYPE_ICONS } from "@/app/_utils/staticData";
import TaskChecklist from "./TaskChecklist";
import Accordion from "../../Accordion/Accordion";
import { TaskAccordionProps, TaskType, TodoTask } from "@/types";

/**
 * Accordion for rendering tasks
 */
export default function TaskAccordion({ type, label, tasks, handleChange }: TaskAccordionProps) {
  const { icon, color } = TASK_TYPE_ICONS[type];
  const completedTasks = tasks.filter((task) => task.isComplete);
  const availableTasks = tasks.filter((task) => !task.isComplete);

  const tasksCompleted = () => {
    return tasks.length === 0 ? "0/1 tasks" : `${completedTasks.length}/${tasks.length} tasks`;
  };

  return (
    <Accordion label={label} color={color} icon={icon} customText={tasksCompleted()}>
      {/* Task Checklist */}
      {availableTasks.length > 0 && <TaskChecklist tasks={availableTasks} type={type} handleChange={handleChange} />}
    </Accordion>
  );
}
