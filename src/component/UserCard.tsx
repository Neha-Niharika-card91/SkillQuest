import { User, UserPlus, UserRoundCheck, UsersRound } from "lucide-react";

export default function UserCard() {
  const user = [
    {
      title: "Session",
      number: "21,459",
      val: "(+29%)",
      text: "Total Users",
      icon: <UsersRound size={20} className="text-violet-700" />,
      color: "bg-violet-200",
      c1: "text-green-300",
    },
    {
      title: "Paid Users",
      number: "4,567",
      val: "(+18%)",
      text: "Last week analytics",
      icon: <UserPlus size={20} className="text-red-700" />,
      color: "bg-red-200",
      c1: "text-green-300",
    },
    {
      title: "Active Users",
      number: "19,860",
      val: "(-14%)",
      text: "Last week analytics",
      icon: <UserRoundCheck size={20} className="text-green-700" />,
      color: "bg-green-200",
      c1: "text-red-300",
    },
    {
      title: "Pending Users",
      number: "237",
      val: "(+42%)",
      text: "Last week analytics",
      icon: <User size={20} className="text-orange-700" />,
      color: "bg-orange-200",
      c1: "text-green-300",
    },
  ];
  return (
    <div className="flex flex-row flex-grow justify-between">
      {user.map((item, index) => (
        <div
          className="flex flex-row bg-white w-55 p-4 m-2 justify-between shadow-lg rounded-sm"
          key={index}
        >
          <div className="flex flex-col">
            <div> {item.title}</div>
            <div className="flex justify-evenly items-center">
              <span className="text-lg">{item.number}</span>
              <span className={`${item.c1} text-xs`}>{item.val}</span>
            </div>
            <div>{item.text} </div>
          </div>
          <div className={`flex ${item.color} p-2 h-7 items-center`}>
            {item.icon}
          </div>
        </div>
      ))}
    </div>
  );
}
