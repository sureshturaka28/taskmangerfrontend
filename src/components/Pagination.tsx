import { ChevronLeft, ChevronRight } from "lucide-react";

interface Props {
  page: number;
  totalPages: number;
  onPageChange: (page: number) => void;
}


export default function Pagination({ page, totalPages, onPageChange }: Props) {

  if (totalPages <= 1) return null;

  return (
    <div className="flex items-center justify-center gap-2 mt-8">

     

      <button
        disabled={page === 1}
        onClick={() => onPageChange(page - 1)}
        className="flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-40"
      >
        <ChevronLeft size={16} />
        Prev
      </button>



      {Array.from({ length: totalPages }, (_, i) => {

        const pageNumber = i + 1;

        return (
          <button
            key={pageNumber}
            onClick={() => onPageChange(pageNumber)}
            className={`px-3 py-1 rounded-lg border transition
              ${
                page === pageNumber
                  ? "bg-blue-600 text-white border-blue-600"
                  : "hover:bg-gray-100"
              }`}
          >
            {pageNumber}
          </button>
        );
      })}

     

      <button
        disabled={page === totalPages}
        onClick={() => onPageChange(page + 1)}
        className="flex items-center gap-1 px-3 py-1 border rounded-lg hover:bg-gray-100 disabled:opacity-40"
      >
        Next
        <ChevronRight size={16} />
      </button>

    </div>
  );
}