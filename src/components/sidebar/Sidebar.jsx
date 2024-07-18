import { navItems } from "../../rawData/navItems";
import "./Sidebar.css";
import { useSelector } from "react-redux";

const Sidebar = () => {
  const isOpen = useSelector((state) => state.sidebar.isOpen);
  return (
    <div className={`sidebar font-sans text-3xl ${isOpen ? "open" : "closed"}`}>
      <div className="sidebar-part1 font-semibold">
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
  );
};

export default Sidebar;
