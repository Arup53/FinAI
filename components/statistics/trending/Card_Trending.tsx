import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import TrendingData from "./TrendingData";

const CardTrending = ({ trending }) => {
  return (
    <Card className="bg-white w-[30%] ">
      <CardHeader className="text-center">
        <CardTitle>🔥Trending</CardTitle>
      </CardHeader>
      <CardContent className="flex flex-col gap-4 justify-between">
        {trending?.map((data) => (
          <TrendingData key={data?.item.id} data={data} />
        ))}
      </CardContent>
    </Card>
  );
};

export default CardTrending;
