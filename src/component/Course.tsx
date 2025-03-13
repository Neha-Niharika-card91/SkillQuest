import { BookOpen, Star, UserRound, Video } from "lucide-react";
import ProgressBar from "./ProgressBar";

export default function Course() {
  const content = [
    {
      icon: "/Angular.png",
      colour: "bg-red-100",
      title: "Basics of Angular",
      image: "/Profile1.png",
      name: "Tommy Sicilia",
      time: "24h 13m",
      per: "88%",
      pro: <ProgressBar percentage={88} />,
      total: "8/12",
      profile: "1.2k",
      read: 12,
      video: 43,
    },
    {
      icon: "/ux.png",
      colour: "bg-orange-100",
      title: "UI/UX Design",
      image: "/Profile2.png",
      name: "Waldemar Mannering",
      time: "234h 13m",
      per: "21%",
      pro: <ProgressBar percentage={21} />,
      total: "12/34",
      profile: "456",
      read: 8,
      video: 16,
    },
    {
      icon: "/React.png",
      colour: "bg-blue-100",
      title: "React Native",
      image: "/Profile3.png",
      name: "Louetta Esses",
      time: "47h 13m",
      per: "23%",
      pro: <ProgressBar percentage={23} />,
      total: "7/16",
      profile: "2.4k",
      read: 24,
      video: 89,
    },
    {
      icon: "/Art.png",
      colour: "bg-green-100",
      title: "Art & Drawing",
      image: "/Profile4.png",
      name: "Tressa Gass",
      time: "458h 13m",
      per: "67%",
      pro: <ProgressBar percentage={67} />,
      total: "20/26",
      profile: "348",
      read: 45,
      video: 110,
    },
    {
      icon: <Star size={20} className="text-violet-700" />,
      colour: "bg-violet-100",
      title: "Basic Fundamentals",
      image: "/Profile5.png",
      name: "Ardis Balderson",
      time: "12h 13m",
      per: "25%",
      pro: <ProgressBar percentage={25} />,
      total: "2/8",
      profile: "8.6k",
      read: 13,
      video: 69,
    },
  ];
  return (
    <div className="flex flex-grow  h-full w-full ">
      <table className="w-full border-collapse  text-left p-2 m-3">
        <thead className="border border-gray-300">
          <tr className=" justify-between border-right ">
            <th> COURSE NAME</th>
            <th> TIME</th>
            <th> PROGRESS</th>
            <th> STATUS</th>
          </tr>
        </thead>
        <tbody>
          {content.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex flex-row m-2">
                  <div
                    className={`${item.colour} p-2 h-10 w-10 mr-2 rounded-lg justify-center items-center`}
                  >
                    {typeof item.icon === "string" ? (
                      <img src={item.icon} alt="icon" className="h-5 w-5" />
                    ) : (
                      item.icon
                    )}
                  </div>
                  <div className="flex flex-col">
                    <div className="flex flex-row">{item.title}</div>
                    <div className="flex flex-row items-center">
                      <img src={item.image} className="h-5 w-5" />
                      {item.name}
                    </div>
                  </div>
                </div>
              </td>
              <td>{item.time}</td>
              <td>
                <div className="flex justify-between p-2">
                  <div>{item.per}</div>
                  <div>{item.pro}</div>
                  <div> {item.total}</div>
                </div>
              </td>
              <td>
                <div className="flex justify-between items-center p-2">
                  <div className="flex flex-row     ">
                    <UserRound size={20} className="text-blue-600 " />
                    {item.profile}
                  </div>
                  <div className="flex flex-row">
                    <BookOpen size={20} className="text-blue-400" />
                    {item.read}
                  </div>
                  <div className="flex flex-row">
                    <Video size={20} className="text-red-600" />
                    {item.video}
                  </div>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
