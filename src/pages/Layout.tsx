import { Outlet } from "react-router-dom";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/components/ThemeProvider";

const Layout = () => {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative h-full">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>
        <Outlet />
      </div>
    </ThemeProvider>
  );
};

export default Layout;
