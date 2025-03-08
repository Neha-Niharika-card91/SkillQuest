import Pagination from "../component/Pagination";

export default function User() {
  return (
    <div>
      <div className="h-50 bg-yellow-500 p-2 m-2"></div>
      <div className="h-100 bg-green-500 p-2 m-2"></div>
      <div className="flex flex-row items-center justify-between px-4">
        <div className="flex justify-start flex-grow text-gray-500">
          <p>Showing 1 to 5 of 25 entries</p>
        </div>
        <div className="flex justify-end">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
