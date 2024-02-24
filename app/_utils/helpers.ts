import { CategoryProps } from "@/types";

/**
 * Flattens lists of tasks across multiple categories and filters out completed tasks
 * @param todoList list of all tasks
 * @returns list of completed tasks
 */
export const getCompletedTasks = (todoList: CategoryProps[]) => {
  return todoList.flatMap(category =>
    category.tasks.filter(task => task.isComplete).map(task => ({
      ...task,
      categoryType: category.type, // Add the category type to each task
    }))
  );
};

/**
 * Get age difference
 * @param bioAge number
 * @param chronoAge number
 * @returns string explaining the difference in your bio and chrono age
 */
export const getAgeDifference = (bioAge: number, chronoAge: number) => {
  const difference = bioAge - chronoAge;
  if (difference > 0) {
    return `Overall, you are ${difference} years older than your chronological age.`;
  } else if (difference < 0) {
    return `Overall, you are ${-difference} years younger than your chronological age.`;
  } else {
    return `Your biological age matches your chronological age.`;
  }
};
