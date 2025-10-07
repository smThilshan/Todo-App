import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoCard from "./components/TodoCard";

export default function App() {
  const [tasks, setTasks] = useState([]);

  // Add new task
  const handleAddTask = (task) => {
    setTasks([...tasks, task]);
  };

  // Mark task as done (remove or just mark)
  const handleDoneTask = (doneTask) => {
    setTasks(tasks.filter((task) => task !== doneTask));
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6 flex flex-col md:flex-row gap-6">
      {/* Left Side - Add Task Form */}
      <div className="md:w-1/2 w-full p-4 flex items-center justify-center">
        <TodoForm onAdd={handleAddTask} />
      </div>

      {/* Right Side - Task Cards */}
      <div className="md:w-1/2 w-full p-4 flex flex-col overflow-y-auto max-h-[80vh]">
        {tasks.length > 0 ? (
          tasks.map((task, index) => (
            <TodoCard key={index} task={task} onDone={handleDoneTask} />
          ))
        ) : (
          <p className="text-gray-500 text-center mt-10">
            No tasks added yet.
          </p>
        )}
      </div>
    </div>
  );
}
