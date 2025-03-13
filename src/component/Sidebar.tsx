import { Link } from "react-router-dom";
import { Home, ShoppingCart, User, ChevronRight } from "lucide-react";

export default function Sidebar() {
  const links = [
    { path: "/dashboard", name: "Dashboard", icon: Home },
    { path: "/ecommerce", name: "ECommerce", icon: ShoppingCart },
    { path: "/users", name: "User", icon: User },
  ];
  return (
    <div className="flex flex-col justify-start bg-white p-2 w-60 h-screen fixed left-0 top-0 bg-white shadow-md">
      <div className="items-center">
        <Link to="/">
          <img src="./public/logo.png" />
        </Link>
      </div>

      <div className="flex mt-3">
        <nav>
          {links.map((link, index) => (
            <div className="rounded hover:bg-blue-200 p-2 m-2" key={index}>
              <Link to={link.path} className="flex flex-row items-center gap-2">
                <link.icon size={20} />
                <span>{link.name}</span>
                <ChevronRight size={20} />
              </Link>
            </div>
          ))}
        </nav>
      </div>
    </div>
  );
}
