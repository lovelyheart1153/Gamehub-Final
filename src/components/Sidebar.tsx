import GenreList from "./GenreList";

const Sidebar = () => {
  return (
    <div className="h-full flex flex-col overflow-y-auto shadow-sm md:border-r pt-14">
      <GenreList />
    </div>
  );
};

export default Sidebar;
