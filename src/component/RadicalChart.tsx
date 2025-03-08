import React from "react";
import { PolarRadiusAxis, RadialBar, RadialBarChart } from "recharts";

interface RadialChartProps {
  percentage: string; // Percentage as a string (e.g., "75%")
  color?: string; // Optional color for the chart
}

const RadialChart: React.FC<RadialChartProps> = ({
  percentage,
  color = "green",
}) => {
  const percentageValue = parseInt(percentage.replace("%", ""), 10);

  const chartColor =
    color ||
    (percentageValue <= 30
      ? "red"
      : percentageValue <= 70
      ? "yellow"
      : "green");

  const chartData = [{ value: percentageValue }];

  return (
    <div className="flex items-center justify-center">
      <RadialBarChart
        width={200}
        height={200}
        innerRadius="20"
        outerRadius="30"
        startAngle={90}
        endAngle={90 - (360 * percentageValue) / 100}
        data={chartData}
      >
        {/* Filled Radial Bar */}
        <RadialBar dataKey="value" fill={chartColor} cornerRadius={10} />

        {/* Percentage Text in Center */}
        <PolarRadiusAxis axisLine={false} tick={false} />
        <text
          x="50%"
          y="50%"
          textAnchor="middle"
          dominantBaseline="middle"
          fontSize="10"
          fontWeight="bold"
          fill="black"
        >
          {percentage}
        </text>
      </RadialBarChart>
    </div>
  );
};

export default RadialChart;
