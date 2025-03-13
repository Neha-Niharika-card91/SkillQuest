import Card from "../component/Card";
import Pagination from "../component/Pagination";

export default function ECommerce() {
  return (
    <div className="flex flex-col w-full h-full flex-grow shadow-md p-1 m-2 rounded-sm px-2">
      <div className="flex flex-row h-90 overflow-auto w-full ">
        <div className="flex-1 p-2 m-2 ">
          <h2>My Courses</h2>
          <p> Total 6 courses you have purchased</p>
        </div>
        <div>
          <div className="flex-1 p-2 m-2 w-full ">
            <select className=" border p-2 m-2 ">
              <option>All Courses</option>
              <option>Free</option>
              <option>Purchased</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-col ">
        <div className="flex flex-row">
          <Card />
        </div>
        <div className="flex flex-row justify-center py-2">
          <Pagination />
        </div>
      </div>
    </div>
  );
}
