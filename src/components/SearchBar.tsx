import { Search } from "lucide-react";
import { Input } from "./ui/input";

const SearchBar = () => {
  return (
    <div className="relative">
      <Input placeholder="Search game..." className="pl-10" />
      <Search className="size-4 absolute top-2.5 left-3" />
    </div>
  );
};

export default SearchBar;
