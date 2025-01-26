import { Outlet, ScrollRestoration } from "react-router-dom";

const Layout: React.FC = () => {
  return (
    <div className="text-white text-poppins w-full h-min-screen">
      <Outlet />
      <ScrollRestoration />
    </div>
  );
};

export default Layout;
