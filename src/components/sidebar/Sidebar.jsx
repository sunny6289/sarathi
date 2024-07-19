import { useEffect, useRef } from "react";
import { navItems } from "../../rawData/navItems";
import "./Sidebar.css";
import { useDispatch, useSelector } from "react-redux";
import { closeSidebar } from "../../redux/slices/sidebar/sidebarReducer";

const Sidebar = () => {
  const sidebarRef = useRef();
  const dispatch = useDispatch();
  const isOpen = useSelector((state) => state.sidebar.isOpen);
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
        <div className="sidebar-part1">
          {navItems.map((item) => (
            <div key={item.id} className="sidebar-item">
              {item.title}
            </div>
          ))}
        </div>
        <div className="sidebar-part2 font-semibold">
          <div className="sidebar-item">Become a Volunteer</div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
