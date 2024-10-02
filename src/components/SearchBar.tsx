import { Search } from "lucide-react";
import { Input } from "./ui/input";
import useGameQuery from "@/hooks/useGameQuery";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";

const SearchBar = () => {
  const { dispatch } = useGameQuery();
  const ref = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        if (ref.current?.value)
          dispatch({ type: "SEARCH", searchText: ref.current.value });
        navigate("/");
      }}
      className="relative"
    >
      <Input ref={ref} placeholder="Search game..." className="pl-10" />
      <Search className="size-4 absolute top-2.5 left-3" />
    </form>
  );
};

export default SearchBar;
