import { useState } from "react";

export default function TodoForm({ onAdd }) {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title.trim() || !description.trim()) return;
    onAdd({ title, description });
    setTitle("");
    setDescription("");
  };

  return (
    <div className="flex items-center justify-center w-full h-full bg-white rounded-2xl shadow-md p-6">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-md flex flex-col gap-5"
      >
        {/* Title */}
        <div className="flex flex-col">
          <label
            htmlFor="task-name"
            className="text-gray-700 text-sm font-semibold mb-1"
          >
            Task Title
          </label>
          <input
            id="task-name"
            type="text"
            placeholder="Enter task title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all rounded-lg px-3 py-2.5 outline-none text-gray-800 placeholder-gray-400"
            required
          />
        </div>

        {/* Description */}
        <div className="flex flex-col">
          <label
            htmlFor="task-description"
            className="text-gray-700 text-sm font-semibold mb-1"
          >
            Description
          </label>
          <textarea
            id="task-description"
            rows={4}
            placeholder="Enter task details"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className="w-full border border-gray-300 focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all rounded-lg px-3 py-2.5 outline-none text-gray-800 placeholder-gray-400 resize-none"
            required
          ></textarea>
        </div>

        {/* Add Button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white font-semibold py-2.5 rounded-lg shadow hover:bg-indigo-700 transition-all"
        >
          + Add Task
        </button>
      </form>
    </div>
  );
}
