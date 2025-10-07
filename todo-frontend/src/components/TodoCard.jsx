export default function TodoCard({ task, onDone }) {
  return (
    <div className="bg-white rounded-2xl shadow-md p-5 mb-4 flex flex-col justify-between hover:shadow-lg transition-all duration-200">
      <div>
        <h2 className="text-xl font-semibold text-gray-800 mb-2">
          {task.title}
        </h2>
        <p className="text-gray-600 text-sm leading-relaxed">
          {task.description}
        </p>
      </div>

      <div className="flex justify-end mt-2">
        <button
          onClick={() => onDone(task)}
          className="px-4 py-1.5 bg-green-500 text-white rounded-lg text-sm font-medium hover:bg-green-600 transition-all"
        >
          Done
        </button>
      </div>
    </div>
  );
}
