import GameGrid from "./GameGrid";
import GameHeading from "./GameHeading";
import { PlatformSelector } from "./PlatformSelector";
import SortSelector from "./SortSelector";

const Main = () => {
  return (
    <div className="md:pl-[300px] pt-[70px] overflow-y-auto pl-4 pr-4">
      <GameHeading />
      <div className="mb-4 space-y-3 xs:space-y-0 xs:flex items-center gap-4 max-w-[600px]">
        <PlatformSelector />
        <SortSelector />
      </div>
      <GameGrid />
    </div>
  );
};

export default Main;
