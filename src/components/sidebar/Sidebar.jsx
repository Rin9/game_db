import menu from "../../constants/menu";
import { Link } from "react-router-dom";

const SidebarItem = ({ item }) => {
  return (
    <Link
      className="sidebar-menu-item transition-all duration-200 ease-out hover:text-theme-gray"
      to={item.url}
    >
      {item.title}
    </Link>
  );
};

const Sidebar = () => {
  return (
    <div className="h-screen w-[20vw] bg-theme-black text-white hidden sm:flex flex-col justify-start items-start pt-14 pl-10 gap-y-7 sticky top-0">
      {menu.map((item) => {
        return <SidebarItem item={item} key={item.title} />;
      })}
    </div>
  );
};

export default Sidebar;
