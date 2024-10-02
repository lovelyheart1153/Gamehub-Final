import { SiWindows11, SiPlaystation, SiXbox } from "react-icons/si";
import { FaApple } from "react-icons/fa";
import { FcLinux } from "react-icons/fc";
import { BsAndroid2 } from "react-icons/bs";
import { MdOutlinePhoneIphone } from "react-icons/md";
import { SiNintendogamecube } from "react-icons/si";
import { FcGlobe } from "react-icons/fc";

import { Platform } from "@/hooks/useGames";
import { IconType } from "react-icons/lib";

interface Props {
  platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {
  const iconMap: { [key: string]: IconType } = {
    pc: SiWindows11,
    playstation: SiPlaystation,
    xbox: SiXbox,
    mac: FaApple,
    linux: FcLinux,
    ios: MdOutlinePhoneIphone,
    web: FcGlobe,
    android: BsAndroid2,
    nintendo: SiNintendogamecube,
  };

  const icons = platforms.map((platform) => iconMap[platform.slug]);

  return (
    <div className="flex items-center gap-2 text-muted-foreground flex-wrap">
      {icons.map((Icon, index) => (
        <Icon key={index} />
      ))}
    </div>
  );
};

export default PlatformIconList;
