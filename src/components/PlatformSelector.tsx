import * as React from "react";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import usePlatforms from "@/hooks/usePlatforms";
import useGameQuery from "@/hooks/useGameQuery";

export function PlatformSelector() {
  const { data } = usePlatforms();
  const { dispatch } = useGameQuery();
  const [open, setOpen] = React.useState(false);
  const [value, setValue] = React.useState("");

  const platforms = data?.results.map((platform) => ({
    label: platform.name,
    value: platform.slug,
    id: platform.id,
  }));

  if (!platforms) return null;

  // const items = [{ label: "All Platforms", value: "all" }, ...platforms];

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-full justify-between"
        >
          {value
            ? platforms.find((platform) => platform.value === value)?.label
            : "Filter By: All"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent align="start" className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search platform..." />
          <CommandList>
            <CommandEmpty>No platform found.</CommandEmpty>
            <CommandGroup>
              <CommandItem
                // className="pl-8"
                value="All Platfroms"
                onSelect={() => {
                  setValue("");
                  dispatch({ type: "FILTER_BY_PLATFORM", platformId: null });
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === "" ? "opacity-100" : "opacity-0"
                  )}
                />
                All Platforms
              </CommandItem>
              {platforms.map((platform) => (
                <CommandItem
                  key={platform.value}
                  value={platform.value}
                  onSelect={(currentValue) => {
                    setValue(currentValue === value ? "" : currentValue);
                    dispatch({
                      type: "FILTER_BY_PLATFORM",
                      platformId: platform.id.toString(),
                    });
                    setOpen(false);
                  }}
                >
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      value === platform.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {platform.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </CommandList>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
