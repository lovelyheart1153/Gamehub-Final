import Main from "./components/Main";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import { ThemeProvider } from "./components/ThemeProvider";

function App() {
  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
      <div className="relative h-full">
        <div className="fixed w-full z-50">
          <Navbar />
        </div>

        <div className="flex h-full">
          <div className="hidden md:flex flex-col h-full w-[280px] fixed inset-y-0">
            <Sidebar />
          </div>
          <div className="w-full h-full">
            <Main />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default App;
