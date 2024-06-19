"use client";

import { flattenAttributes, getAssetData } from "@/lib/utils";
import { activeUsersChart } from "@/queries/active-users-chart";
import { FC, useEffect, useState } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { name: "Page A", uv: 400, pv: 2400, amt: 2400 },
  { name: "Page B", uv: 1400, pv: 2400, amt: 2400 },
];

export const ActiveUsersChart: FC = () => {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    const getData = async () => {
      const data = flattenAttributes(
        await getAssetData("/api/active-users-graphs", activeUsersChart)
      );

      setChartData(data);
      return data;
    };

    getData();

    return () => {};
  }, []);

  return (
    <>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            width={600}
            height={300}
            data={chartData.data[0].content}
            margin={{ top: 5, right: 20, bottom: 5, left: 0 }}
          >
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      )}
    </>
  );
};
