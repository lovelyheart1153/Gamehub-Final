import GameGrid from "./GameGrid";
import PlatformSelector from "./PlatformSelector";

const Main = () => {
  return (
    <div className="md:pl-[300px] pt-[70px] overflow-y-auto pr-4">
      <h1 className="mb-6 text-6xl font-extrabold">Games</h1>
      <div className="mb-4">
        <PlatformSelector />
      </div>
      <GameGrid />
    </div>
  );
};

export default Main;
