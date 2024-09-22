import logoLight from "../assets/logo-light.png";
import logoDark from "../assets/logo-dark.png";
import { useTheme } from "./ThemeProvider";

const Logo = () => {
  const { theme } = useTheme();

  return (
    <div className="">
      <img
        className="size-10"
        src={theme === "light" ? logoLight : logoDark}
        alt="Brand Logo"
      />
    </div>
  );
};

export default Logo;
