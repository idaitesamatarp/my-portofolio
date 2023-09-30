import { FaRegHeart, FaInbox } from "react-icons/fa6";
import { Link, useLocation } from "react-router-dom";

export default function Navbar() {
  const location = useLocation();

  const navbar = [
    {
      icon: <FaRegHeart className="text-xl my-2" />,
      title: "ABOUT ME",
      link: "/aboutme",
    },
    {
      icon: <FaInbox className="text-xl my-2" />,
      title: "PROJECTS",
      link: "/projects",
    },
  ];

  return (
    <div className="h-screen w-1/12 flex flex-col justify-center bg-red-600">
      {navbar.map((nav, index) => (
        <nav
          key={index}
          className={
            "hover:bg-black " +
            (location.pathname == nav.link ? "bg-black" : "")
          }
        >
          <Link
            className="flex flex-col justify-center items-center my-3 text-white hover:text-white"
            to={nav.link}
          >
            {nav.icon}
            <p className="text-sm">{nav.title}</p>
          </Link>
        </nav>
      ))}
    </div>
  );
}
