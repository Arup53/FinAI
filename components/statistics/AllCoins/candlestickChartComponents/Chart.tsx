"use client";

import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import "dayjs";

import ReactApexChart from "react-apexcharts";
import { useSearchParams } from "next/navigation";
import { candleStickOption } from "@/components/util/chartOption";

const Chart = ({ symbol }) => {
  const [series, setSeries] = useState([]);
  console.log(symbol);
  const searchParams = useSearchParams();
  const search = searchParams.get("data");

  const parsedData = search ? JSON.parse(decodeURIComponent(search)) : null;
  useEffect(() => {
    // Function to fetch historical candlestick data from Binance API.
    const fetchData = async () => {
      const binancesymbol = symbol.toUpperCase();
      console.log(binancesymbol);
      const interval = "1m"; // 1-minute interval
      const limit = 50; // number of candlesticks
      const url = `https://api.binance.com/api/v3/klines?symbol=${binancesymbol}&interval=${interval}&limit=${limit}`;

      try {
        const response = await fetch(url);
        const data = await response.json();

        // Transform data: each candle is [timestamp, open, high, low, close]
        const seriesData = data.map((d) => ({
          x: new Date(d[0]),
          y: [
            parseFloat(d[1]),
            parseFloat(d[2]),
            parseFloat(d[3]),
            parseFloat(d[4]),
          ],
        }));

        setSeries(seriesData);
      } catch (error) {
        console.error("Error fetching Binance data:", error);
      }
    };

    fetchData();
  }, [symbol]);

  //   [
  //     d[0], // Timestamp
  //     parseFloat(d[1]), // Open price
  //     parseFloat(d[2]), // High price
  //     parseFloat(d[3]), // Low price
  //     parseFloat(d[4]), // Close price
  //   ]
  // ApexCharts options

  return (
    <div style={{ padding: "2rem" }}>
      <h1>Binance Candlestick Chart</h1>
      {series.length > 0 ? (
        <ReactApexChart
          series={[{ data: series }]}
          options={candleStickOption}
          type="candlestick"
          height={350}
        />
      ) : (
        <p>Loading data...</p>
      )}
      koi
    </div>
  );
};

export default Chart;
