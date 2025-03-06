export default function ECommerce() {
  return (
    <div className="flex-flex-col w-full h-full flex-grow shadow-md p-1 bg-white rounded-sm px-2">
      <div className="flex flex-row ">
        <div className="flex-1 ">
          <h2>My Courses</h2>
          <p> Total 6 courses you have purchased</p>
        </div>
        <div>
          <div className="flex-1 w-100 p-2">
            <select className="w-full border p-2 m-2">
              <option>All Courses</option>
              <option>Free</option>
              <option>Purchased</option>
            </select>
          </div>
        </div>
      </div>
      <div className="flex flex-row ">
        <div className="flex-1 "> Hi</div>
        <div className="flex-1 "> Hi</div>
        <div className="flex-1 "> Hi</div>
      </div>
      <div className="flex flex-row ">
        <div className="flex-1 "> Hi</div>
        <div className="flex-1 "> Hi</div>
        <div className="flex-1 "> Hi</div>
      </div>
    </div>
  );
}
