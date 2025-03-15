import { CalendarDays, Clock } from "lucide-react";

export default function Webinar() {
  return (
    <div className="flex flex-col">
      <div className="flex m-1 justify-center">
        <img
          src="/Image (1).jpg"
          alt="img-pg"
          className="object-cover items-center align-center"
        />
      </div>

      <div className="m-2 p-2">
        <p>Upcoming Webinar</p>
        <p className="text-sx text-gray-500">
          Next Generation Frontend Architecture Using Layout Engine And React
          Native Web.
        </p>
      </div>

      <div className="flex flex-row m-1 ">
        <div className="flex flex-grow items-center ">
          <div className="bg-blue-200 p-2 m-1 ">
            <CalendarDays size={20} className="text-blue-500" />
          </div>
          <div className="mx-2">
            <p>17 Nov 23</p>
            <p>Date</p>
          </div>
        </div>

        <div className="flex flex-grow items-center">
          <div className="bg-blue-200 p-2 m-1">
            <Clock size={20} className="text-blue-500" />
          </div>

          <div className="mx-2">
            <p>32 minutes</p>
            <p>Duration</p>
          </div>
        </div>
      </div>

      <div>
        <button
          className="bg-blue-500 p-2 rounded-lg text-white w-full"
          type="button"
        >
          Join the event
        </button>
      </div>
    </div>
  );
}
