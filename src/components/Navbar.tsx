import { Link } from "react-router-dom";
import { ColorModeToggle } from "./ColorModeToggle";
import Logo from "./Logo";
import MobileNavBar from "./MobileNavBar";
import SearchBar from "./SearchBar";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center px-4 h-14 border-b z-50 bg-background gap-2 md:gap-8 lg:gap-12">
      <Link to="/">
        <Logo />
      </Link>

      <div className="flex-1">
        <SearchBar />
      </div>
      <div className="flex items-center gap-x-4">
        <ColorModeToggle />
        <MobileNavBar />
      </div>
    </div>
  );
};

export default Navbar;
