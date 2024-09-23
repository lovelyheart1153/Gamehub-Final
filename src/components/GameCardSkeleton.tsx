import { Card, CardContent, CardHeader, CardTitle } from "./ui/card";
import { Skeleton } from "./ui/skeleton";

const GameCardSkeleton = () => {
  return (
    <Card className="overflow-hidden rounded-md">
      <CardHeader className="p-0">
        <Skeleton className="h-[180px]" />
      </CardHeader>
      <CardContent className="p-4">
        <CardTitle className="text-2xl font-bold mb-4">
          <Skeleton className="w-full h-8" />
        </CardTitle>
        <div className="flex justify-between gap-x-10 items-center">
          <Skeleton className="w-full h-6" />
          <Skeleton className="px-3 h-6" />
        </div>
      </CardContent>
    </Card>
  );
};

export default GameCardSkeleton;
