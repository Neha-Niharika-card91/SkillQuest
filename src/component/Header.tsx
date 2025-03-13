import { useState } from "react";
import { Link } from "react-router-dom";

export default function Header() {
  const [isVisible, setVisible] = useState(false);
  return (
    <div className="flex justify-end shadow-md p-1 bg-white rounded-sm px-2">
      <img
        className="size-12 shrink-0 "
        src="/Avatar.png"
        alt="Avatar"
        onClick={() => setVisible(!isVisible)}
      />

      {isVisible && (
        <div className="absolute right-2 top-15 w-40 bg-white rounded-lg shadow-lg border border-gray-200">
          <ul className="p-2 space-y-2">
            <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md transition duration-200 ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="p-2 hover:bg-gray-100 cursor-pointer rounded-md transition duration-200 ease-in-out">
              <Link to="/profile">Profile</Link>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
}
