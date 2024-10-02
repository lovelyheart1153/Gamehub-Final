import Main from "@/components/Main";
import Sidebar from "@/components/Sidebar";

const HomePage = () => {
  return (
    <div className="flex h-full">
      <div className="hidden md:flex flex-col h-full w-[280px] fixed inset-y-0">
        <Sidebar />
      </div>
      <div className="w-full h-full">
        <Main />
      </div>
    </div>
  );
};

export default HomePage;
