import { Outlet, ScrollRestoration } from "react-router-dom";
import Footer from "@/components/Footer";
import ScrollUpButton from "@/components/ScrollUpButton";

const Layout: React.FC = () => {
  return (
    <div className="text-white text-poppins w-full h-min-screen relative">
      <Outlet />
      <ScrollRestoration />
      <Footer />
      <ScrollUpButton />
    </div>
  );
};

export default Layout;
