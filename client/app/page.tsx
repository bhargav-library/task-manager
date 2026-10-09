

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

  function handleToggleTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.map((task) =>
        task.id === id
          ? { ...task, completed: !task.completed }
          : task
      )
    );
  }

  function handleDeleteTask(id: number) {
    setTasks((previousTasks) =>
      previousTasks.filter((task) => task.id !== id)
    );
  }

  return (
    <main className="page">
      <div className="task-container">
        <h1>Task Manager</h1>
        <p className="subtitle">Organize your work, one task at a time.</p>

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

          <button onClick={handleAddTask}>Add task</button>
        </div>

        <div className="task-list">
          {tasks.length === 0 ? (
            <p className="empty-message">No tasks yet. Add one above!</p>
          ) : (
            tasks.map((task) => (
              <div className="task" key={task.id}>
                <label className="task-details">
                  <input
                    type="checkbox"
                    checked={task.completed}
                    onChange={() => handleToggleTask(task.id)}
                  />

                  <span className={task.completed ? "completed" : ""}>
                    {task.title}
                  </span>
                </label>

                <button
                  className="delete-button"
                  onClick={() => handleDeleteTask(task.id)}
                  aria-label={`Delete ${task.title}`}
                >
                  Delete
                </button>
              </div>
            ))
          )}
        </div>

        <p className="task-count">
          {tasks.filter((task) => !task.completed).length} tasks remaining
        </p>
      </div>
    </main>
  );
}
