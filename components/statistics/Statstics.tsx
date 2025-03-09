"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import MarketCap from "./marketCap/MarketCap";
import CardTrending from "./trending/Card_Trending";

const Stats = () => {
  const [trendingCoins, setTrendingCoins] = useState([]);
  const [marketCapital, setMarketCapital] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      const res = await axios.get("http://localhost:3000/marketStats", {
        headers: {
          "Content-Type": "application/json",
        },
      });

      setTrendingCoins(res.data.trending);
      setMarketCapital(res.data.marketCap);
    };

    fetchData();
  }, []);

  console.log(trendingCoins, marketCapital);

  return (
    <div className="flex gap-2">
      {trendingCoins.length > 0 && <CardTrending trending={trendingCoins} />}
      <MarketCap marketCap={marketCapital} />
    </div>
  );
};

export default Stats;
