import {
  Video,
  CodeXml,
  Camera,
  Volleyball,
  Mic,
  EllipsisVertical,
} from "lucide-react";
const data = [
  {
    icon: <Video size={20} className="text-violet-500" />,
    color: "bg-violet-200",
    text: "Videography Basic Design Course",
    view: "1.2k Views",
  },
  {
    icon: <CodeXml size={20} className="text-blue-500" />,
    color: "bg-blue-200",
    text: "Basic Front-end Development Course",
    view: "834 Views",
  },
  {
    icon: <Camera size={20} className="text-green-500" />,
    color: "bg-green-200",
    text: "Basic Fundamentals of Photography ",
    view: "3.7k Views",
  },
  {
    icon: <Volleyball size={20} className="text-orange-500" />,
    color: "bg-orange-200",
    text: "Advance Dribble Base Visual Design",
    view: "2.5k Views",
  },
  {
    icon: <Mic size={20} className="text-red-500" />,
    color: "bg-red-200",
    text: "Your First Singing Lesson",
    view: "948 Views",
  },
];
export default function TopCourses() {
  return (
    <div className="flex flex-col">
      <div className="m-2 flex flex-row justify-between items-center">
        <div>
          <h2>Top Courses</h2>
        </div>

        <div className="flex justify-end">
          <EllipsisVertical size={20} />
        </div>
      </div>

      <div className="flex items-between">
        <table className="border-collapse w-full  ">
          <tbody className=" m-2 p-2 text-center">
            {data.map((item, index) => (
              <tr key={index} className=" p-2 ">
                <td className="h-2 w-2 ">
                  <div className={` p-2 rounded-sm  ${item.color}`}>
                    {item.icon}
                  </div>
                </td>
                <td className=" p-2 ">{item.text}</td>
                <td>
                  <div className="m-2 bg-gray-200 rounded-sm ">{item.view}</div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
