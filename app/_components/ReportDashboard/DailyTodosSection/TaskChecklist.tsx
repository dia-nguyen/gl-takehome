import { TaskCheckListProps, TodoTask } from "@/types";

/**
 * Task Checklist
 */
export default function TaskChecklist({ tasks, type, handleChange }: TaskCheckListProps) {
  return (
    <div className="grid gap-2">
      {tasks.map((item: TodoTask, index: number) => (
        <label className="flex items-center justify-between rounded-full bg-white text-xs p-3 cursor-pointer" key={index}>
          <span>{item.task}</span>
          <input
            type="checkbox"
            className="form-checkbox"
            checked={item.isComplete}
            onChange={(e) => handleChange(type, item.task, e.target.checked)}
          />
        </label>
      ))}
    </div>
  );
}

