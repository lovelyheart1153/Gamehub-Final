import { PropsWithChildren } from "react";

const Entry = ({ children }: PropsWithChildren) => {
  return <p className="text-sm">{children}</p>;
};

export default Entry;
