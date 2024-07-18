import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar, openSidebar } from "../sidebar/sidebarAction";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();

  const handleMenuClick = () => {
    if (isSidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  return (
    <div className="flex fixed w-full items-center justify-between px-3 bg-blue-100 shadow-md mb-4 z-10">
      {isLoggedIn && (
        <div className="menuBtn">
        <button onClick={handleMenuClick}>
          {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
        </button>
      </div>
      )}
      {/* logo section */}
      <div className="logo">
        <img src="/logo.svg" alt="" className="h-14" />
      </div>
      <div className="navigation flex gap-3">seek help</div>
    </div>
  );
}

export default Navbar;
