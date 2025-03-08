"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import MarketCap from "./marketCap/MarketCap";
import CardTrending from "./trending/Card_Trending";

const Stats = () => {
  const [trending, setTrending] = useState([]);

  // useEffect(() => {
  //   // Function to fetch historical candlestick data from Binance API.
  //   const fetchData = async () => {
  //     const res = await axios.get(
  //       "https://api.coingecko.com/api/v3/search/trending",
  //       {
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //       }
  //     );
  //     const newArr = res.data.coins.slice(0, 3);

  //     setTrending(newArr);
  //   };

  //   fetchData();
  // }, []);

  console.log(trending);
  return (
    <div className="flex gap-2">
      {trending.length > 0 && <CardTrending trending={trending} />}
      <MarketCap />
    </div>
  );
};

export default Stats;
