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
  ReferenceLine,
} from "recharts";

interface ChartItem {
  date: string;
  id: number;
  value: string;
}

interface ActiveUsersChartProps {
  className: string;
}

const ActiveUsersChart: FC<ActiveUsersChartProps> = ({ className }) => {
  const [chartData, setChartData] = useState<ChartItem[] | null>(null);

  useEffect(() => {
    const getData = async () => {
      const data = flattenAttributes(
        await getAssetData("/api/active-users-graphs", activeUsersChart)
      );

      setChartData(data.data[0].content);
      return data;
    };

    getData();

    return () => {};
  }, []);

  return (
    <div className={className}>
      {chartData && (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart
            data={chartData}
            margin={{ top: 0, right: 0, bottom: 0, left: 0 }}
          >
            <ReferenceLine
              y={650}
              label="Max"
              viewBox={{ height: 10, width: 200 }}
              stroke="red"
              strokeDasharray="5 5"
            />

            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              activeDot={{ r: 8 }}
            />
            <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />

            <XAxis
              dataKey="date"
              interval={0}
              padding={{ left: 30, right: 30 }}
            />

            <YAxis padding={{ top: 30, bottom: 30 }} width={40} />
            <Tooltip />
          </LineChart>
        </ResponsiveContainer>
      )}
    </div>
  );
};

export default ActiveUsersChart;
