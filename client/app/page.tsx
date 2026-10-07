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
    <main className="min-h-screen bg-gray-100 p-10">
      <div className="mx-auto max-w-xl rounded-lg bg-white p-6 shadow">
        <h1 className="mb-6 text-3xl font-bold">
          Task Manager
        </h1>

        <div className="mb-6 flex gap-2">
          <input
            type="text"
            placeholder="Enter a task..."
            className="flex-1 rounded border p-2"
          />

          <button className="rounded bg-blue-500 px-4 py-2 text-white">
            Add
          </button>
        </div>

        <div>
          {tasks.map((task) => (
            <div
              key={task.id}
              className="mb-3 flex items-center gap-2"
            >
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