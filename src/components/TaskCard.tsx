import { updateTaskStatus, deleteTask } from "../api/taskApi";
import StatusBadge from "./StatusBadge";
import PriorityBadge from "./PriorityBadge";
import { Trash2, Calendar } from "lucide-react";
import { formatDate, getTimeAgo } from "../utils/date";

import toast from "react-hot-toast";

interface Props {
  task: any;
  refresh: () => void;
}

/*
Task card component  information
*/
export default function TaskCard({ task, refresh }: Props) {

  const timeAgo = getTimeAgo(task.createdAt);

  const handleStatusChange = async (status: string) => {

  await updateTaskStatus(task._id, status);

  toast.success("Task status updated");

  refresh();

};

 const handleDelete = async () => {

  await deleteTask(task._id);

  toast.success("Task deleted");

  refresh();

};

  return (
    <div className="bg-white border rounded-xl shadow-sm p-5 flex flex-col gap-3 hover:shadow-lg hover:-translate-y-1 transition-all duration-200">

     

      <div className="flex justify-between items-start">

        <h3 className="font-semibold text-gray-800 text-lg">
          {task.title}
        </h3>

        <button
          onClick={handleDelete}
          className="text-red-500 hover:text-red-700 transition"
        >
          <Trash2 size={18} />
        </button>

      </div>

     

      {task.description && (
        <p className="text-sm text-gray-500">
          {task.description}
        </p>
      )}

      {/* Created Date */}

      <div className="flex items-center gap-2 text-sm text-gray-500">

        <Calendar size={14} />

        <span>
          {formatDate(task.createdAt)}
        </span>

        <span className="text-gray-400">
          •
        </span>

       <span>
  {timeAgo}
</span>

      </div>

   

      <div className="flex justify-between items-center mt-2">

        <div className="flex gap-2">

          <PriorityBadge priority={task.priority} />

          <StatusBadge status={task.status} />

        </div>

        <select
          value={task.status}
          onChange={(e) => handleStatusChange(e.target.value)}
          className="border rounded-md p-1 text-sm"
        >
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

      </div>

    </div>
  );
}