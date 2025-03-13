import { useState } from "react";
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
  const [detail, setDetail] = useState([
    {
      profile: "/Profile1.png",
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
      profile: "/Profile2.png",
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
      profile: "/Profile3.png",
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
      profile: "/Profile4.png",
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
      profile: "/Profile5.png",
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
      profile: "/Profile1.png",
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
      profile: "/Profile2.png",
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
      profile: "/Profile3.png",
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
      profile: "/Profile4.png",
      name: "Joseph Oliver",
      id: "joseph.87",
      icon: <User size={20} className="text-green-400" />,
      role: "Subscriber",
      plan: "Basic",
      billing: "Manual Cash",
      Status: "Pending",
      color: "bg-orange-200",
    },
  ]);

  const handleClick = (index: number) => {
    const newDetail = detail.filter((_, i) => i !== index);
    setDetail(newDetail);
  };
  const [Visible, setVisible] = useState<number | null>(null);
  const handleView = (index: number) => {
    if (index == Visible) {
      setVisible(null);
    } else {
      setVisible(index);
    }
  };

  return (
    <div className="w-full h-full m-2 flex flex-grow">
      <table className="w-full border-collapse text-left">
        <thead>
          <tr>
            <th className="border-r-1 border-gray-400">USER</th>
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
                <div className="flex px-2 justify-left items-center">
                  <div className="pr-2">{item.icon}</div>
                  <div>{item.role}</div>
                </div>
              </td>
              <td className="px-2">{item.plan}</td>
              <td className="px-2">{item.billing}</td>
              <td>
                <span className={`${item.color} rounded-lg p-2 ml-2`}>
                  {item.Status}
                </span>
              </td>
              <td>
                <div className="flex px-2 justify-between w-full">
                  <Trash2
                    size={20}
                    className="cursor-pointer"
                    onClick={() => handleClick(index)}
                  />
                  <Eye size={20} onClick={() => handleView(index)} />
                  <EllipsisVertical size={20} />
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      {Visible !== null && (
        <div className="fixed flex items-center justify-center bg-white bg-opacity-80 shadow p-4">
          <div className="bg-white p-6 rounded-lg shadow-lg w-full sm:w-96">
            <img src={detail[Visible].profile} className="h-12 w-12 mx-auto" />
            <div className="mt-4">
              <div>
                <strong>Name:</strong> {detail[Visible].name}
              </div>
              <div>
                <strong>Email ID:</strong> {detail[Visible].id}
              </div>
              <div>
                <strong>Role:</strong> {detail[Visible].role}
              </div>
              <div>
                <strong>Plan:</strong> {detail[Visible].plan}
              </div>
              <div>
                <strong>Billing:</strong> {detail[Visible].billing}
              </div>
              <div>
                <strong>Status:</strong> {detail[Visible].Status}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
