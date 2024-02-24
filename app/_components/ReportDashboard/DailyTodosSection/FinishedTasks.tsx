import { FinishedTasksProps } from "@/types";

/**
 * FinishedTasks Component
 *
 * Renders a list of finished tasks. Each task is displayed with its name and a checked checkbox
 * to indicate its completion status.
 *
 * Props:
 * - tasks (Array): An array of task objects. Each object has a `task` (String) and `isComplete` (Boolean).
 * - handleChange
 *
 * Usage: <FinishedTasks tasks={tasksArray} />
 * TasksList -> FinishedTasks
 */
export default function FinishedTasks({ tasks, handleChange }: FinishedTasksProps) {
  return (
    <>
      <span className="text-xs mt-3 text-neutral-400">Finished Task</span>
      {tasks.map((item, index) => (
        <label className="flex items-center justify-between bg-white text-xs px-5 py-1 text-neutral-400 cursor-pointer" key={index}>
          <span>{item.task}</span>
          <input type="checkbox" className="form-checkbox" checked={item.isComplete} onChange={() => handleChange(item.categoryType, item.task, !item.isComplete)} />
        </label>
      ))}
    </>
  );
}
