import Header from "../components/Header";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";
import TaskStats from "../components/TaskStats";
import { useState } from "react";

export default function Dashboard() {

  const [refreshKey, setRefreshKey] = useState(0);

  const refreshTasks = () => {
    setRefreshKey(prev => prev + 1);
  };

  return (
    <div className="min-h-screen bg-gray-100">

      <Header />

      <div className="max-w-6xl mx-auto p-6">

        <TaskForm refresh={refreshTasks} />

        <TaskStats refreshKey={refreshKey} />

        <TaskList refreshKey={refreshKey} />

      </div>

    </div>
  );
}