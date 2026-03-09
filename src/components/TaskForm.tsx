import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { taskSchema, TaskFormData } from "../utils/validation";
import { createTask } from "../api/taskApi";
import { ClipboardList, Flag, FileText, PlusCircle } from "lucide-react";

import toast from "react-hot-toast";

export default function TaskForm({ refresh }: any) {

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<TaskFormData>({
    resolver: zodResolver(taskSchema),
  });

  const onSubmit = async (data: TaskFormData) => {

  try {

    await createTask(data);

    toast.success("Task created successfully");

    reset();

    if (refresh) refresh();

  } catch (error) {

    toast.error("Failed to create task");

  }

};

  return (
    <div className="relative bg-white/80 backdrop-blur border border-gray-200 rounded-2xl shadow-lg p-6 mb-10 transition hover:shadow-xl">

    

      <div className="flex items-center gap-3 mb-6">

        <div className="bg-gradient-to-br from-blue-500 to-indigo-600 p-2 rounded-lg text-white shadow">
          <ClipboardList size={18} />
        </div>

        <h2 className="text-lg font-semibold text-gray-800">
          Create New Task
        </h2>

      </div>

   

      <form
        onSubmit={handleSubmit(onSubmit)}
        className="grid md:grid-cols-3 gap-5"
      >

      

        <div className="flex flex-col gap-1">

          <label className="text-sm text-gray-600">
            Task Title
          </label>

          <div className="relative">

            <FileText
              size={16}
              className="absolute left-3 top-3 text-gray-400"
            />

            <input
              {...register("title")}
              placeholder="Finish assignment"
              className="w-full border rounded-lg pl-9 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
            />

          </div>

          {errors.title && (
            <span className="text-xs text-red-500">
              {errors.title.message}
            </span>
          )}

        </div>

    

        <div className="flex flex-col gap-1 md:col-span-2">

          <label className="text-sm text-gray-600">
            Description
          </label>

          <textarea
            {...register("description")}
            placeholder="Add details about this task..."
            rows={1}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition"
          />

        </div>

    

        <div className="flex flex-col gap-1">

          <label className="text-sm text-gray-600 flex items-center gap-1">

            <Flag size={14} />

            Priority

          </label>

          <select
            {...register("priority")}
            className="border rounded-lg px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 transition"
          >
            <option value="low">Low Priority</option>
            <option value="medium">Medium Priority</option>
            <option value="high">High Priority</option>
          </select>

        </div>


        <div className="flex items-end">

          <button
            disabled={isSubmitting}
            className="flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-2 rounded-lg font-medium shadow hover:shadow-lg hover:scale-[1.02] active:scale-[0.98] transition"
          >

            <PlusCircle size={18} />

            {isSubmitting ? "Creating..." : "Create Task"}

          </button>

        </div>

      </form>

    </div>
  );
}