import { useEffect, useState } from "react";
import { getTasks } from "../api/taskApi";
import TaskCard from "./TaskCard";

import TaskSkeleton from "./TaskSkeleton";

import Pagination from "./Pagination";

interface Props {
  refreshKey: number;
}


/*
Displays all tasks 
*/
export default function TaskList({ refreshKey }: Props) {
  const [tasks, setTasks] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");

  const [status, setStatus] = useState("");

  const [sort, setSort] = useState("desc");

  const [page, setPage] = useState(1);
  const limit = 10;
  const [totalPages, setTotalPages] = useState(1);

  const [totalTasks, setTotalTasks] = useState(0);

  
  useEffect(() => {
    const timer = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => clearTimeout(timer);
  }, [search]);

  /*
  Fetch tasks from backend
  */
  const fetchTasks = async () => {
    setLoading(true);

    const res = await getTasks({
      search: debouncedSearch,
      status,
      sort,
      page,
      limit,
    });

    setTasks(res.data.tasks);
    setTotalTasks(res.data.total);
    setTotalPages(Math.ceil(res.data.total / limit));

    setLoading(false);
  };

 
  useEffect(() => {
    fetchTasks();
  }, [debouncedSearch, status, sort, page, refreshKey]);

  return (
    <div className="mt-8">
   

      <div className="flex flex-col md:flex-row gap-4 mb-6">
    

        <input
          type="text"
          placeholder="Search tasks..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-1/3"
        />

     

        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-48"
        >
          <option value="">All Status</option>
          <option value="todo">Todo</option>
          <option value="in-progress">In Progress</option>
          <option value="done">Done</option>
        </select>

     

        <select
          value={sort}
          onChange={(e) => setSort(e.target.value)}
          className="border rounded-lg p-2 w-full md:w-48"
        >
          <option value="desc">Newest First</option>
          <option value="asc">Oldest First</option>
        </select>
      </div>

      

      {loading && (
        <div className="grid md:grid-cols-3 gap-4">
          {Array.from({ length: 6 }).map((_, i) => (
            <TaskSkeleton key={i} />
          ))}
        </div>
      )}

     

      {!loading && tasks.length === 0 && (
        <div className="text-center py-16">
          <img
            src="https://illustrations.popsy.co/gray/task-list.svg"
            alt="No tasks"
            className="w-48 mx-auto mb-6 opacity-80"
          />

          <h3 className="text-lg font-semibold text-gray-700">No tasks yet</h3>

          <p className="text-gray-500 text-sm">
            Create your first task to get started
          </p>
        </div>
      )}

    

      <div className="grid md:grid-cols-3 gap-4">
        {tasks.map((task) => (
          <TaskCard
  key={task._id}
  task={task}
  refresh={fetchTasks}
/>
        ))}
      </div>

      <Pagination page={page} totalPages={totalPages} onPageChange={setPage} />
    </div>
  );
}
