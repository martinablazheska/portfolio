import { Outlet } from "react-router-dom";
import Navigation from "@/pages/layout/components/Navigation";
import MusicButton from "@/pages/layout/components/MusicButton";
import ScrollUpButton from "@/pages/layout/components/ScrollUpButton";

const Layout: React.FC = () => {
  return (
    <div className="text-white text-poppins w-full h-min-screen">
      <Navigation />
      <Outlet />
      <MusicButton />
      <ScrollUpButton />
    </div>
  );
};

export default Layout;
