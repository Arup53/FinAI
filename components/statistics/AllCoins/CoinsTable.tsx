"use client";

import { useRouter } from "next/navigation";

interface CryptoData {
  id: number;
  icon: React.ReactNode;
  name: string;
  symbol: string;
  price: string;
  change1h: string;
  change24h: string;
  change7d: string;
  volume24h: string;
  marketCap: string;
  trend1h: "up" | "down" | "neutral";
  trend24h: "up" | "down" | "neutral";
  trend7d: "up" | "down" | "neutral";
}

// const cryptoData: CryptoData[] = [
//   {
//     id: 1,
//     icon: <Bitcoin className="w-8 h-8 text-[#F7931A]" />,
//     name: "Bitcoin",
//     symbol: "BTC",
//     price: "$98,226.25",
//     change1h: "0.1%",
//     change24h: "1.0%",
//     change7d: "1.8%",
//     volume24h: "$26,137,265,965",
//     marketCap: "$1,947,611,306,280",
//     trend1h: "down",
//     trend24h: "up",
//     trend7d: "up",
//   },
//   {
//     id: 2,
//     icon: <Ethereum className="w-8 h-8 text-[#3C3C3D]" />,
//     name: "Ethereum",
//     symbol: "ETH",
//     price: "$2,738.70",
//     change1h: "0.3%",
//     change24h: "0.3%",
//     change7d: "2.1%",
//     volume24h: "$14,235,590,045",
//     marketCap: "$330,075,151,079",
//     trend1h: "down",
//     trend24h: "down",
//     trend7d: "up",
//   },
//   {
//     id: 3,
//     icon: <Circle className="w-8 h-8 text-[#23292F]" />,
//     name: "XRP",
//     symbol: "XRP",
//     price: "$2.66",
//     change1h: "0.2%",
//     change24h: "1.3%",
//     change7d: "4.7%",
//     volume24h: "$3,531,055,307",
//     marketCap: "$154,164,260,860",
//     trend1h: "down",
//     trend24h: "down",
//     trend7d: "up",
//   },
//   {
//     id: 4,
//     icon: <CircleDollarSign className="w-8 h-8 text-[#26A17B]" />,
//     name: "Tether",
//     symbol: "USDT",
//     price: "$1.00",
//     change1h: "0.0%",
//     change24h: "0.0%",
//     change7d: "0.0%",
//     volume24h: "$53,606,826,592",
//     marketCap: "$141,809,181,587",
//     trend1h: "neutral",
//     trend24h: "neutral",
//     trend7d: "neutral",
//   },
//   {
//     id: 5,
//     icon: <Disc className="w-8 h-8 text-[#F3BA2F]" />,
//     name: "BNB",
//     symbol: "BNB",
//     price: "$651.76",
//     change1h: "0.2%",
//     change24h: "0.2%",
//     change7d: "3.5%",
//     volume24h: "$684,681,632",
//     marketCap: "$95,057,606,752",
//     trend1h: "down",
//     trend24h: "down",
//     trend7d: "down",
//   },
// ];

const CoinsTable = ({ coins, loading }) => {
  const router = useRouter();

  const handleClick = (symbol, coinInfo) => {
    const data = JSON.stringify(coinInfo); // Convert object to string
    router.push(`/coin/${symbol}?data=${encodeURIComponent(data)}`); // Encode to handle special characters
  };
  console.log(coins);
  return (
    <div className="min-h-screen bg-gray-100 p-8">
      <div className="max-w-7xl mx-auto">
        <div className="bg-white rounded-lg shadow overflow-hidden">
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200">
              <thead className="bg-gray-50">
                <tr>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    #
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Coin
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Price
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    24h
                  </th>

                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    24h Volume
                  </th>
                  <th
                    scope="col"
                    className="px-6 py-3 text-right text-xs font-medium text-gray-500 uppercase tracking-wider"
                  >
                    Market Cap
                  </th>
                </tr>
              </thead>
              <tbody className="bg-white divide-y divide-gray-200">
                {coins &&
                  coins?.coins
                    ?.filter(
                      (crypto: any) =>
                        crypto.symbol !== "usdt" &&
                        crypto.symbol !== "steth" &&
                        crypto.symbol !== "wsteth" &&
                        crypto.symbol !== "leo" &&
                        crypto.symbol !== "weth" &&
                        crypto.symbol !== "hype" &&
                        crypto.symbol !== "bgb" &&
                        crypto.symbol !== "usde" &&
                        crypto.symbol !== "weeth" &&
                        crypto.symbol !== "wbt" &&
                        crypto.symbol !== "ondo" &&
                        crypto.symbol !== "tkx" &&
                        crypto.symbol !== "mnt" &&
                        crypto.symbol !== "okb" &&
                        crypto.symbol !== "susds" &&
                        crypto.symbol !== "cbbtc" &&
                        crypto.symbol !== "kas" &&
                        crypto.symbol !== "cro" &&
                        crypto.symbol !== "lbtc" &&
                        crypto.symbol !== "ftn" &&
                        crypto.symbol !== "rseth" &&
                        crypto.symbol !== "kcs" &&
                        crypto.symbol !== "reth" &&
                        crypto.symbol !== "meth" &&
                        crypto.symbol !== "flr" &&
                        crypto.symbol !== "usd0" &&
                        crypto.symbol !== "ip" &&
                        crypto.symbol !== "tel" &&
                        crypto.symbol !== "solvbtc.bbn"
                    )
                    .map((crypto, idx) => (
                      <tr
                        key={idx + 1}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => handleClick(crypto.symbol, crypto)}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                          {idx + 1}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="flex-shrink-0">TBD</div>
                            <div className="ml-4">
                              <div className="text-sm font-medium text-gray-900">
                                {crypto.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {crypto.symbol.toUpperCase()}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                          {`$${crypto.current_price.toLocaleString()}`}
                        </td>
                        {/* <td
                      className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                        crypto.trend1h === "up"
                          ? "text-green-600"
                          : crypto.trend1h === "down"
                          ? "text-red-600"
                          : "text-gray-900"
                      }`}
                    >
                      {crypto.trend1h === "down"
                        ? "↓"
                        : crypto.trend1h === "up"
                        ? "↑"
                        : ""}{" "}
                      {crypto.change1h}
                    </td> */}
                        <td
                          className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                            crypto.price_change_percentage_24h > 0
                              ? "text-green-600"
                              : "text-red-600"
                          }`}
                        >
                          {crypto.price_change_percentage_24h < 0 ? "↓" : "↑"}
                          {crypto.price_change_percentage_24h.toFixed(2)}%
                        </td>
                        {/* <td
                      className={`px-6 py-4 whitespace-nowrap text-sm text-right ${
                        crypto.trend7d === "up"
                          ? "text-green-600"
                          : crypto.trend7d === "down"
                          ? "text-red-600"
                          : "text-gray-900"
                      }`}
                    >
                      {crypto.trend7d === "down"
                        ? "↓"
                        : crypto.trend7d === "up"
                        ? "↑"
                        : ""}{" "}
                      {crypto.change7d}
                    </td> */}
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                          {` $${crypto.total_volume.toLocaleString()}`}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-right text-gray-900">
                          {`$${crypto.market_cap.toLocaleString()}`}
                        </td>
                      </tr>
                    ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CoinsTable;
