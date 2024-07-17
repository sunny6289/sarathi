import './Sidebar.css';
const Sidebar = () => {
    return (
        <div className="sidebar font-sans text-3xl">
            <div className='sidebar-close-icon font-semibold'>x</div>
            <div className="sidebar-part1 font-semibold">
                <div className="sidebar-item">We Provide</div>
                <div className="sidebar-item">Ask Donation</div>
                <div className="sidebar-item">Emergency</div>
                <div className="sidebar-item">Profile</div>
            </div>
            <div className="sidebar-part2 font-semibold">
                <div className="sidebar-item">Become a Volunteer</div>
            </div>
        </div>
    );
}

export default Sidebar;
