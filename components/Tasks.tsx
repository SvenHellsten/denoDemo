import { Task } from "./Task.tsx";

interface TasksProps {
  tasks: string[];
  removeTask: (s: string) => void;
}

export function Tasks({ tasks, removeTask }: TasksProps) {
  return (
    <div class="flex flex-col gap-2 pt-2 w-full">
      {tasks.map((task) => <Task task={task} removeTask={removeTask} />)}
    </div>
  );
}