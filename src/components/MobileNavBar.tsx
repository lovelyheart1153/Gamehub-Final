import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "./ui/sheet";
import Sidebar from "./Sidebar";

const MobileNavBar = () => {
  return (
    <Sheet>
      <SheetTrigger className="md:hidden hover:opacity-75 transition-all">
        <Menu />
      </SheetTrigger>

      <SheetContent side="right">
        <Sidebar />
      </SheetContent>
    </Sheet>
  );
};

export default MobileNavBar;
