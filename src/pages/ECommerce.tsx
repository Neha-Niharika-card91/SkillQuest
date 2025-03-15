import Card from "../component/Card";
import Pagination from "../component/Pagination";

export default function ECommerce() {
  return (
    <div className="flex flex-col w-full shadow-md p-2 m-2 rounded-sm ">
      <div className="flex p-2">
        <div className="flex flex-col w-full flex-grow p-2 m-2 ">
          <h2 className="text-lg font-bold">My Courses</h2>
          <p className="text-sm">Total 6 courses you have purchased</p>
        </div>

        <div className="flex flex-grow w-full items-center justify-end p-2">
          <select className="border p-2 m-2 w-200">
            <option>All Courses</option>
            <option>Free</option>
            <option>Purchased</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col fl ">
        <div className="flex flex-wrap gap-4">
          <Card />
        </div>
        <div className="flex flex-row justify-center py-2">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
