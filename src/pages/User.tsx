import Pagination from "../component/Pagination";
import UserCard from "../component/UserCard";
import UserDetail from "../component/UserDetail";

export default function User() {
  return (
    <div>
      <div className="flex flex-row flex-grow p-2 m-2 justify-between w-full">
        <UserCard />
      </div>
      <div className="flex flex-row h-full bg-white p-2 m-2">
        <div className="w-full flex flex-col items-center justify-between px-4">
          <div className="w-full">
            <UserDetail />
          </div>
          <div className="flex flex-row w-full items-center justify-between ">
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
  );
}
