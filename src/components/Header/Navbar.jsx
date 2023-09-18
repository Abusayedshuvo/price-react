import { useState } from "react";
import Link from "./Link";
import { RiMenu2Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
  const [open, setOpen] = useState(true);
  const routes = [
    { id: 1, path: "/", name: "Home" },
    { id: 2, path: "/about", name: "About" },
    { id: 3, path: "/products", name: "Products" },
    { id: 4, path: "/contact", name: "Contact" },
    { id: 5, path: "/dashboard", name: "Dashboard" },
  ];

  return (
    <>
      <div className="container mx-auto">
        <div className="text-2xl md:hidden" onClick={() => setOpen(!open)}>
          {open === true ? <RiMenu2Fill /> : <RiCloseFill />}
        </div>
        <ul
          className={`md:flex absolute md:static bg-slate-800 py-5 text-white duration-1000 ${
            open === true ? "left-5" : "-left-32"
          }`}
        >
          {routes.map((route) => (
            <Link key={route.id} route={route}></Link>
          ))}
        </ul>
      </div>
    </>
  );
};

export default Navbar;
