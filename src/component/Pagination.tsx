import { ChevronsLeft, ChevronsRight } from "lucide-react";
const Pagination = () => {
  return (
    <div className="flex justify-center items-center mt-4">
      <div className="flex space-x-2">
        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
          <ChevronsLeft size={20} />
        </button>

        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600">
          1
        </button>

        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600">
          2
        </button>

        <button className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-blue-600 active">
          3
        </button>

        <button className="px-4 py-2 bg-gray-300 text-gray-700 rounded-lg hover:bg-gray-400">
          <ChevronsRight size={20} />
        </button>
      </div>
    </div>
  );
};

export default Pagination;
