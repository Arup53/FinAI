import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import axios from "axios";
import { useEffect, useState } from "react";

const MarketCap = () => {
  const [marketCap, setMarketCap] = useState("");
  const [markeChangePer, setMarketChangePer] = useState("");
  // useEffect(() => {
  //   // Function to fetch historical candlestick data from Binance API.
  //   const fetchData = async () => {
  //     const res = await axios.get("https://api.coingecko.com/api/v3/global", {
  //       headers: {
  //         "Content-Type": "application/json",
  //       },
  //     });
  //     console.log(res.data.data.market_cap_change_percentage_24h_usd);
  //     console.log(res.data.data.total_market_cap.usd);
  //     setMarketCap(res.data.data.total_market_cap.usd);
  //     setMarketChangePer(res.data.data.market_cap_change_percentage_24h_usd);
  //   };

  //   fetchData();
  // }, []);

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
            {marketCap
              ? marketCap.toLocaleString("en-US", { maximumFractionDigits: 0 })
              : ""}
          </p>
        </CardContent>
        <CardFooter className="flex gap-4 justify-between">
          <p className="text-2xl font-bold">Percentage Change</p>
          <p className="text-lg font-bold">
            {markeChangePer && markeChangePer.toFixed(2)}%
          </p>
        </CardFooter>
      </Card>
    </>
  );
};

export default MarketCap;
