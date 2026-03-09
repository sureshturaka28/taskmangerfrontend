export default function TaskSkeleton() {
  return (
    <div className="bg-white border rounded-xl p-5 shadow-sm animate-pulse flex flex-col gap-3">

      <div className="h-4 bg-gray-200 rounded w-3/4"></div>

      <div className="h-3 bg-gray-200 rounded w-full"></div>

      <div className="h-3 bg-gray-200 rounded w-5/6"></div>

      <div className="flex justify-between mt-2">
        <div className="h-6 w-16 bg-gray-200 rounded"></div>
        <div className="h-6 w-20 bg-gray-200 rounded"></div>
      </div>

    </div>
  );
}