import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { ChevronUp, ChevronDown } from "lucide-react";

const TrendingData = ({ data }) => {
  console.log(data);

  const { name, small, data: priceData } = data.item || {};
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center  gap-2">
        <Avatar>
          <AvatarImage src={small} alt="@shadcn" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>
        <h5>{name}</h5>
      </div>
      <div className="flex gap-2 items-center ">
        <p>${priceData.price.toFixed(2)}</p>
        <p
          className={`flex gap-2 ${
            priceData.price_change_percentage_24h.usd.toFixed(2) > 0
              ? "text-green-500 "
              : "text-red-500 "
          }`}
        >
          <span>
            {priceData.price_change_percentage_24h.usd > 0 ? (
              <ChevronUp />
            ) : (
              <ChevronDown />
            )}
          </span>
          <span>{priceData.price_change_percentage_24h.usd.toFixed(2)}</span>
        </p>
      </div>
    </div>
  );
};

export default TrendingData;
