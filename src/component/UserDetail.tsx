import {
  Monitor,
  Crown,
  Trash2,
  Eye,
  EllipsisVertical,
  SquarePen,
  ChartPie,
  User,
} from "lucide-react";

export default function UserDetail() {
  const detail = [
    {
      profile: "./public/Profile1.png",
      name: "Jordan Stevenson",
      id: "jordan.stevenson",
      icon: <Crown size={20} className="text-blue-500" />,
      role: "Admin",
      plan: "Enterprise",
      billing: "Auto Debit",
      Status: "Pending",
      color: "bg-orange-200",
    },
    {
      profile: "./public/Profile2.png",
      name: "Richard Payne",
      id: "richad247",
      icon: <SquarePen size={20} className="text-orange-400" />,
      role: "Editor",
      plan: "Team",
      billing: "Auto Debit",
      Status: "Active",
      color: "bg-green-200",
    },
    {
      profile: "./public/Profile3.png",
      name: "Jennifer Summers",
      id: "summers.45",
      icon: <Monitor size={20} className="text-red-400" />,
      role: "Autor",
      plan: "Company",
      billing: "Auto Debit",
      Status: "Active",
      color: "bg-green-200",
    },
    {
      profile: "./public/Profile4.png",
      name: "Mr. Justin Richardson",
      id: "jr.3734",
      icon: <SquarePen size={20} className="text-orange-400" />,
      role: "Editor",
      plan: "Team",
      billing: "Manual Paypal",
      Status: "Pending",
      color: "bg-orange-200",
    },
    {
      profile: "./public/Profile5.png",
      name: "Nicholas Tanner",
      id: "nicholas.t",
      icon: <ChartPie size={20} className="text-blue-400" />,
      role: "Maintainer",
      plan: "Company",
      billing: "Manual Cash",
      Status: "Active",
      color: "bg-green-200",
    },
    {
      profile: "./public/Profile1.png",
      name: "Crystal Mays",
      id: "mays.754",
      icon: <SquarePen size={20} className="text-orange-400" />,
      role: "Editor",
      plan: "Team",
      billing: "Manual Cash",
      Status: "Pending",
      color: "bg-orange-200",
    },
    {
      profile: "./public/Profile2.png",
      name: "Mary Garcia",
      id: "mary.garcia",
      icon: <ChartPie size={20} className="text-blue-400" />,
      role: "Maintainer",
      plan: "Team",
      billing: "Auto Debit",
      Status: "Inactive",
      color: "bg-violet-200",
    },
    {
      profile: "./public/Profile3.png",
      name: "Megan Roberts",
      id: "roberts.3456",
      icon: <User size={20} className="text-green-400" />,
      role: "Subscriber",
      plan: "Company",
      billing: "Manual Paypal",
      Status: "Active",
      color: "bg-green-200",
    },
    {
      profile: "./public/Profile4.png",
      name: "Joseph Oliver",
      id: "joseph.87",
      icon: <User size={20} className="text-green-400" />,
      role: "Subscriber",
      plan: "Basic",
      billing: "Manual Cash",
      Status: "Pending",
      color: "bg-orange-200",
    },
  ];
  return (
    <div className="w-full h-full m-2 flex flex-grow ">
      <table className="w-full border-collapse text-left ">
        <thead>
          <tr>
            <th className="border-r-1 border-gray-400 ">USER</th>
            <th className="border-r-1 border-gray-400 pl-2">ROLE</th>
            <th className="border-r-1 border-gray-400 pl-2">PLAN</th>
            <th className="border-r-1 border-gray-400 pl-2">BILLING</th>
            <th className="border-r-1 border-gray-400 pl-2">STATUS</th>
            <th className="pl-2">ACTION</th>
          </tr>
        </thead>
        <tbody className="justify-between items-center text-xs">
          {detail.map((item, index) => (
            <tr key={index}>
              <td>
                <div className="flex px-2 h-15 items-center ">
                  <div className="w-10">
                    <img src={item.profile} className="h-8" />
                  </div>
                  <div className="flex flex-col">
                    {item.name}
                    <span className="text-xs text-gray-500">{item.id}</span>
                  </div>
                </div>
              </td>
              <td>
                <div className="flex  px-2 justify-left items-center">
                  <div className="pr-2">{item.icon}</div>
                  <div>{item.role}</div>
                </div>
              </td>
              <td className=" px-2 ">{item.plan}</td>
              <td className=" px-2 ">{item.billing}</td>
              <td>
                <span className={`${item.color} rounded-lg p-2 ml-2`}>
                  {item.Status}
                </span>
              </td>
              <td>
                <div className="flex px-2 justify-between w-full">
                  <Trash2 size={20} />
                  <Eye size={20} />
                  <EllipsisVertical size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
