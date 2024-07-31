import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { FaBars, FaTimes } from "react-icons/fa"; // Import icons
import {
  closeSidebar,
  openSidebar,
} from "../../redux/slices/sidebar/sidebarReducer";
import Button from "../reusable/Button";
import { useNavigate } from "react-router-dom";

function Navbar() {
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const isSidebarOpen = useSelector((state) => state.sidebar.isOpen);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleMenuClick = () => {
    if (isSidebarOpen) {
      dispatch(closeSidebar());
    } else {
      dispatch(openSidebar());
    }
  };

  return (
    <div className="flex fixed w-full items-center justify-between px-3 bg-blue-100 shadow-md mb-4 z-50">
      {isLoggedIn && (
        <div className="menuBtn">
          <button onClick={handleMenuClick}>
            {isSidebarOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      )}
      {/* logo section */}
      <div className="logo">
        <img
          onClick={() => navigate("/")}
          src="/sarathi-logo.png"
          alt=""
          className="h-14 cursor-pointer"
        />
      </div>
      {isLoggedIn && (
        <div className="navigation flex gap-3">
          <Button
            content="Seek Help"
            size="md"
            onClick={() => {
              navigate("/seek help");
            }}
          />
        </div>
      )}
    </div>
  );
}

export default Navbar;
