import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, ChevronDown } from "lucide-react";

const TrendingData = ({ data }) => {
  console.log(data);

  const { name, image, change } = data || {};
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center  gap-2">
        <Avatar>
          <AvatarImage src={image} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h5>{name}</h5>
      </div>
      <div className="flex gap-2 items-center ">
        <p
          className={`flex gap-2 ${
            change.toFixed(2) > 0 ? "text-green-500 " : "text-red-500 "
          }`}
        >
          <span>{change.usd > 0 ? <ChevronUp /> : <ChevronDown />}</span>
          <span>{change.toFixed(2)}%</span>
        </p>
      </div>
    </div>
  );
};

export default TrendingData;
