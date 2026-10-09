
"use client";

import { useState } from "react";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const [tasks, setTasks] = useState<Task[]>([
    {
      id: 1,
      title: "Learn TypeScript",
      completed: false,
    },
    {
      id: 2,
      title: "Build React project",
      completed: false,
    },
    {
      id: 3,
      title: "Learn NestJS",
      completed: false,
    },
  ]);

  const [taskTitle, setTaskTitle] = useState("");

  function handleAddTask() {
    const trimmedTitle = taskTitle.trim();

    if (trimmedTitle === "") {
      return;
    }

    const newTask: Task = {
      id: Date.now(),
      title: trimmedTitle,
      completed: false,
    };

    setTasks((previousTasks) => [...previousTasks, newTask]);
    setTaskTitle("");
  }

  return (
    <main className="page">
      <div className="task-container">
        <h1>Task Manager</h1>

        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a task..."
            value={taskTitle}
            onChange={(event) => setTaskTitle(event.target.value)}
            onKeyDown={(event) => {
              if (event.key === "Enter") {
                handleAddTask();
              }
            }}
          />

          <button onClick={handleAddTask}>Add</button>
        </div>

        <div className="task-list">
          {tasks.map((task) => (
            <div className="task" key={task.id}>
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
              />

              <span>{task.title}</span>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
