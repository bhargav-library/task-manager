"use client";

type Task = {
  id: number;
  title: string;
  completed: boolean;
};

export default function Home() {
  const tasks: Task[] = [
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
  ];

  return (
    <main className="page">
      <div className="task-container">
        <h1>Task Manager</h1>

        <div className="task-input">
          <input
            type="text"
            placeholder="Enter a task..."
          />

          <button>Add</button>
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