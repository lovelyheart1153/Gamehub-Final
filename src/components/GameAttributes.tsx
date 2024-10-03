import { ReactNode } from "react";

interface Props {
  title: string;
  children: ReactNode;
}

const GameAttributes = ({ title, children }: Props) => {
  return (
    <div>
      <h3 className="text-muted-foreground font-semibold uppercase mb-1">
        {title}
      </h3>
      <div className="space-y-2">{children}</div>
    </div>
  );
};

export default GameAttributes;
