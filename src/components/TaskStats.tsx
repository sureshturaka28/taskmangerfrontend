import { useEffect, useState } from "react";
import { getTaskStats } from "../api/taskApi";

interface Props {
  refreshKey: number;
}

export default function TaskStats({ refreshKey }: Props) {

  const [stats, setStats] = useState({
    total: 0,
    todo: 0,
    inProgress: 0,
    done: 0
  });

  const fetchStats = async () => {
    const res = await getTaskStats();
    setStats(res.data);
  };

  useEffect(() => {
    fetchStats();
  }, [refreshKey]);

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-6">

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-gray-500 text-sm">Total Tasks</p>
        <h3 className="text-2xl font-bold">{stats.total}</h3>
      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-gray-500 text-sm">Todo</p>
        <h3 className="text-2xl font-bold text-gray-700">{stats.todo}</h3>
      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-gray-500 text-sm">In Progress</p>
        <h3 className="text-2xl font-bold text-yellow-600">{stats.inProgress}</h3>
      </div>

      <div className="bg-white border rounded-xl p-4 shadow-sm">
        <p className="text-gray-500 text-sm">Completed</p>
        <h3 className="text-2xl font-bold text-green-600">{stats.done}</h3>
      </div>

    </div>
  );
}