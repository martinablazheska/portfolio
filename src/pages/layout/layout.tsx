import { Outlet } from "react-router-dom";
import MusicButton from "@/components/MusicButton";
import ScrollUpButton from "@/components/ScrollUpButton";

const Layout: React.FC = () => {
  return (
    <div className="text-white text-poppins w-full h-min-screen">
      <Outlet />
      <MusicButton />
      <ScrollUpButton />
    </div>
  );
};

export default Layout;
