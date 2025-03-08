import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const CoinCard = ({ data }) => {
  console.log(data);
  const { current_price, price_change_percentage_24h } = data || {};
  return (
    <Card className="bg-white w-[60%] mx-auto ">
      <CardHeader className="text-center">
        <CardTitle>Market Info</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between">
        <div className="flex justify-between">
          <p className="text-2xl font-bold">Current Price</p>
          <p className="text-2xl ">${current_price.toLocaleString()}</p>
        </div>
        <div>
          <div className="flex justify-between">
            <p className="text-2xl font-bold">Price Change%</p>
            <p className="text-2xl ">
              {price_change_percentage_24h.toFixed(2)}%
            </p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default CoinCard;
