import { Menu } from "lucide-react";
import { useState } from "react";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="bg-white border-b shadow-sm sticky top-0 z-50">

      <div className="max-w-7xl mx-auto px-6">

        <div className="flex items-center justify-between h-16">

         
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white font-bold">
              T
            </div>

            <span className="text-lg font-semibold text-gray-800">
              Task Manager
            </span>
          </div>

         

         
          <div className="hidden md:flex items-center gap-4">

            <div className="text-sm text-gray-600">
              Developer
            </div>

            <img
  src="https://ui-avatars.com/api/?name=Turaka+Suresh&background=2563eb&color=fff"
  alt="avatar"
  className="w-9 h-9 rounded-full border"
/>

          </div>

       
          <button
            className="md:hidden"
            onClick={() => setOpen(!open)}
          >
            <Menu size={22} />
          </button>

        </div>

      </div>

    

      {open && (
        <div className="md:hidden border-t bg-white">

          <div className="px-6 py-4 flex flex-col gap-4 text-gray-600">

            <a className="hover:text-blue-600">Dashboard</a>
            <a className="hover:text-blue-600">Tasks</a>
            <a className="hover:text-blue-600">Analytics</a>

          </div>

        </div>
      )}

    </header>
  );
}