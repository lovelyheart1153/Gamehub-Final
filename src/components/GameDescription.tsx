import { useState } from "react";
import { Button } from "./ui/button";

interface Props {
  description: string;
}

const GameDescription = ({ description }: Props) => {
  const [showMore, setShowMore] = useState(false);
  const descriptionLength = description.length;
  const maxChars = 300;

  const text =
    showMore && descriptionLength > 300
      ? description
      : description.slice(0, maxChars) + "...";

  return (
    <div>
      {text}{" "}
      {descriptionLength > 300 && (
        <Button
          className="ml-2"
          size="sm"
          onClick={() => setShowMore((prev) => !prev)}
        >
          {showMore ? "Show Less" : "Show More"}
        </Button>
      )}
    </div>
  );
};

export default GameDescription;
