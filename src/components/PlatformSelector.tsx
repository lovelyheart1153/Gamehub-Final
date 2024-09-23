import { platforms } from "@/data/platfroms";
import { Combobox } from "./ComboBox";

const PlatformSelector = () => {
  const items = platforms.map((platform) => ({
    label: platform.name,
    value: platform.slug,
  }));

  return (
    <Combobox
      items={[{ label: "All Platforms", value: "all" }, ...items]}
      placeHolder="Filter By Platform"
    />
  );
};

export default PlatformSelector;
