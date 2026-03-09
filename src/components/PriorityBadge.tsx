interface Props {
  priority: string;
}

export default function PriorityBadge({ priority }: Props) {

  const styles: Record<string, string> = {
    low: "bg-green-100 text-green-700",
    medium: "bg-yellow-100 text-yellow-700",
    high: "bg-red-100 text-red-700",
  };

  return (
    <span className={`px-2 py-1 rounded text-xs font-medium ${styles[priority]}`}>
      {priority}
    </span>
  );
}