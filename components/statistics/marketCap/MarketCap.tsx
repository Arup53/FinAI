import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const MarketCap = ({ marketCap }) => {
  return (
    <>
      <Card className="bg-white w-[30%] ">
        <CardHeader className="text-center">
          <CardTitle>Market Data</CardTitle>
        </CardHeader>
        <CardContent className="flex gap-4 justify-between">
          <p className="text-2xl font-bold">Market Cap:</p>
          <p className="text-lg font-bold">
            $
            {marketCap.length > 0
              ? marketCap[0].capital.toLocaleString("en-US", {
                  maximumFractionDigits: 0,
                })
              : ""}
          </p>
        </CardContent>
        <CardFooter className="flex gap-4 justify-between">
          <p className="text-2xl font-bold">Percentage Change</p>
          <p className="text-lg font-bold">
            {marketCap.length > 0 && marketCap[0].change.toFixed(2)}%
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MarketCap;
