import { cn } from "@/lib/utils";

const CriticScoreBadge = ({ score }: { score: number }) => {
  return (
    <div
      className={cn(
        "px-3 py-1 rounded bg-accent text-accent-foreground w-fit",
        score > 60 && "bg-yellow-600/25 text-yellow-600",
        score > 79 && "bg-lime-400/30 text-lime-500"
      )}
    >
      {score}
    </div>
  );
};

export default CriticScoreBadge;
