interface Props {
  status: string;
}

export default function StatusBadge({ status }: Props) {
  const styles: Record<string, string> = {
    todo: "bg-gray-200 text-gray-700",
    "in-progress": "bg-yellow-200 text-yellow-800",
    done: "bg-green-200 text-green-800",
  };

  return (
    <span
      className={`px-2 py-1 rounded text-xs font-medium ${styles[status]}`}
    >
      {status}
    </span>
  );
}