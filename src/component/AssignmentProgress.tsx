import { EllipsisVertical, Star } from "lucide-react";
import RadialChart from "../component/RadicalChart";

export default function AssignmentProgress() {
  const content = [
    {
      title: "User Experience Design",
      task: "120 Tasks",
      per: "75%",
      color: "#00008B",
    },
    {
      title: "Basic Fundamentals",
      task: "32 Tasks",
      per: "48%",
      color: "#008000",
    },
    {
      title: "React Native Components",
      task: "182 Tasks",
      per: "15%",
      color: "#FF0000",
    },
    {
      title: "Basic of Music Theory",
      task: "56 Tasks",
      per: "28%",
      color: "#87CEEB",
    },
  ];
  return (
    <div className="flex flex-col p-4">
      <div className="mb-4 flex justify-between items-center">
        <h2 className="text-lg font-semibold">Assignment Progress</h2>
        <EllipsisVertical size={20} />
      </div>

      <div className="flex flex-col gap-4 ">
        {content.map((item, index) => (
          <div key={index}>
            <div className="flex flex-row justify-between">
              <div className="p-1 m-1 flex justify-center h-10 w-10">
                <RadialChart percentage={item.per} color={item.color} />
              </div>
              <div className="p-2 flex flex-col text-wrap">
                <p className="text-sm">{item.title}</p>
                <p className="text-xs">{item.task}</p>
              </div>
              <div className="m-2 flex items-center bg-gray-100">
                <Star size={20} className="text-yellow-500 " />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
