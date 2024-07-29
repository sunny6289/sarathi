import { useEffect, useRef } from "react";
import { navItems } from "../../rawData/navItems";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/sidebar/sidebarReducer";
import { NavLink } from "react-router-dom";
import { FaPowerOff } from "react-icons/fa6";

const Sidebar = () => {
  const sidebarRef = useRef();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
        dispatch(closeSidebar());
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);
  return (
    <>
      {/* black overlay */}
      <div
        className={`overlay ${isOpen ? "visible" : ""}`}
        onClick={() => dispatch(closeSidebar())}
      />
      {/* sidebar */}
      <div
        ref={sidebarRef}
        className={`sidebar text-xl ${isOpen ? "open" : "closed"}`}
      >
        <div></div>
        <div className="flex items-center flex-col gap-6">
          {navItems.map((item) =>
            item.isSecure ? (
              isLoggedIn ? (
                <div
                  key={item.id}
                  className="relative whitespace-nowrap cursor-pointer transition-all hover:scale-105"
                >
                  <NavLink to={item.route}>{item.title}</NavLink>
                </div>
              ) : null
            ) : null
          )}
        </div>
        <div className="font-semibold">
          <NavLink onClick={()=>dispatch(closeSidebar())} className="sidebar-item text-red-600 flex items-center gap-2" to={'/logout'}><span>Logout</span><FaPowerOff/></NavLink>
          {/* <div ></div> */}
        </div>
      </div>
    </>
  );
};

export default Sidebar;
