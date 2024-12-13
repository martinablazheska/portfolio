import { Outlet } from "react-router-dom";
import Navigation from "@/pages/layout/components/Navigation";

const Layout: React.FC = () => {
  return (
    <div className="text-white text-poppins w-full h-min-screen">
      <Navigation />
      <Outlet />
    </div>
  );
};

export default Layout;
