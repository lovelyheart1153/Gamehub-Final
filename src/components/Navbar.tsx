import { ColorModeToggle } from "./ColorModeToggle";
import Logo from "./Logo";
import MobileNavBar from "./MobileNavBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 h-14 border-b z-50 bg-background">
      <Logo />
      <div className="flex items-center gap-x-4">
        <ColorModeToggle />
        <MobileNavBar />
      </div>
    </div>
  );
};

export default Navbar;
