"use client";

import { useState } from "react";
import Section from "../../Section/SectionCard";
import TaskAccordion from "./TaskAccordion";
import FinishedTasks from "./FinishedTasks";
import { TaskType, TodoListProps } from "@/types";
import { getCompletedTasks } from "@/app/_utils/helpers";
import { DEFAULT_TODO_LIST } from "@/app/_utils/staticData";

export default function DailyTodosSection() {
  const [isExpanded, setIsExpanded] = useState<boolean>(true);
  const [todoList, setTodoList] = useState<TodoListProps[]>(DEFAULT_TODO_LIST);
  const completedTasks = getCompletedTasks(todoList);

  // handles selecting completion on tasks
  const handleChange = (taskType: TaskType, taskToUpdate: string, newIsComplete: boolean) => {
    setTodoList(
      todoList.map(category => {
        if (category.type === taskType) {
          return {
            ...category,
            tasks: category.tasks.map(task => {
              if (task.task === taskToUpdate) {
                return { ...task, isComplete: newIsComplete };
              }
              return task;
            }),
          };
        }
        return category;
      })
    );
  };

  return (
    <Section
      title="Daily to-dos"
      isExpanded={isExpanded}
      handleClick={() => setIsExpanded(prev => !prev)}
    >
      {isExpanded && (
        <>
          {todoList.map((todo) => (
            <TaskAccordion
              type={todo.type}
              label={todo.label}
              tasks={todo.tasks}
              key={todo.type}
              handleChange={handleChange}
            />
          ))}

          {/* Finished Tasks */}
          <FinishedTasks tasks={completedTasks} handleChange={handleChange}/>
        </>
      )}
    </Section>
  );
}





