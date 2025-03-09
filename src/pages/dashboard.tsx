import AssignentProgress from "../component/AssignmentProgress";
import Pagination from "../component/Pagination";
import TopCourses from "../component/TopCourses";
import Webinar from "../component/Webinar";
import Course from "../component/Course";
export default function Dashboard() {
  return (
    <div className="bg-grey-100 ">
      <div className="grid grid-cols-3 gap-4 h-80  p-2 m-2">
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-md overflow-auto">
          <TopCourses />
        </div>
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-md overflow-auto ">
          <Webinar />
        </div>
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-md overflow-auto ">
          <AssignentProgress />
        </div>
      </div>
      <div className="h-70  p-2 m-2">
        <div className="flex flex-col bg-white p-4 rounded-lg shadow-md h-full overflow-auto">
          <div className="mb-4 flex justify-between items-center">
            <h2 className="text-lg font-semibold">Course you are taking</h2>
            <input
              type="text"
              placeholder="Search Course"
              className="border rounded p-2"
            />
          </div>
          <div>
            <Course />
            <div className="flex flex-row w-full items-center bg-white justify-between ">
              <div className="flex flex-row justify-start flex-grow text-gray-500">
                <p>Showing 1 to 5 of 25 entries</p>
              </div>
              <div className="flex justify-end">
                <Pagination />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
