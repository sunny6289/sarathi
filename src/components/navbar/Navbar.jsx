import React from "react";
import { navItems } from "../../rawData/navItems";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  return (
    <div className="flex fixed w-full items-center justify-between px-3 bg-blue-100 shadow-md mb-4">
      {/* logo section */}
      <div className="logo">
        <img src="/logo.svg" alt="" className="h-14" />
      </div>
      <div className="navigation flex gap-3">
        {navItems.map((item) =>
          // Check if user is logged in and if the route is secure
          (isLoggedIn && item.isSecure) || item.title === "Home" ? (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-neutral-950" : ""}`
              }
            >
              {item.title}
            </NavLink>
          ) : // Check if user is not logged in and if the route is not secure
          !isLoggedIn && !item.isSecure ? (
            <NavLink
              key={item.id}
              to={item.route}
              className={({ isActive }) =>
                `${isActive ? "border-b-2 border-neutral-950" : ""}`
              }
            >
              {item.title}
            </NavLink>
          ) : null
        )}
      </div>
    </div>
  );
}

export default Navbar;
