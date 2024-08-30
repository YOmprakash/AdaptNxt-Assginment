import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";
import { IoMdInformationCircleOutline } from "react-icons/io";

const data = [
  { name: "WooCommerce Store", value: 55.8 },
  { name: "Shopify Store", value: 44.2 },
];

const COLORS = ["#F2784B", "#51C3D3"];

const RADIAN = Math.PI / 180;

const renderCustomizedLabel = ({
  cx,
  cy,
  midAngle,
  innerRadius,
  outerRadius,
  percent,
}) => {
  const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text
      x={x}
      y={y}
      fill="white"
      textAnchor="middle"
      dominantBaseline="middle"
      fontSize="14"
      fontWeight="bold"
    >
      {`${(percent * 100).toFixed(1)}%`}
    </text>
  );
};

const CustomTooltip = ({ active, payload }) => {
  if (active && payload && payload.length) {
    const { name, value, percent } = payload[0];
    return (
      <div className="p-2 bg-white border rounded shadow">
        <p>{`${name}: ${value.toFixed(1)} (${(percent * 100).toFixed(1)}%)`}</p>
      </div>
    );
  }
  return null;
};

const CustomLegend = ({ payload }) => {
  return (
    <div className="flex flex-wrap justify-center mt-4">
      {payload.map((entry, index) => (
        <div
          key={`item-${index}`}
          className="flex flex-col items-center mx-4 my-2 text-center"
        >
          <div className="flex items-center">
            <div
              style={{ backgroundColor: entry.color }}
              className="w-4 h-4 mr-2 rounded-full"
            ></div>
            <span>{entry.value}</span>
          </div>
        </div>
      ))}
    </div>
  );
};

const CustomPieChart = () => (
  <div>
    <div className="relative">
      <div className="absolute z-10 -mt-4 text-center transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2">
        <p className="text-[12px] text-black font-sm font-semibold">Total</p>
        <p className="font-bold text-1xl">2659</p>
      </div>
      <div className="flex items-center gap-2 pb-2 mb-4 border-b">
        <h2 className="pb-2 text-xl font-semibold text-gray-700">
          Portion of Sales
        </h2>
        <IoMdInformationCircleOutline className="text-[20px] text-gray-500" />
      </div>
      <ResponsiveContainer width="100%" height={300}>
        <PieChart>
          <Pie
            data={data}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={100}
            fill="#8884d8"
            dataKey="value"
            startAngle={-110}
            endAngle={250}
          >
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
      <CustomLegend
        payload={data.map((item, index) => ({
          value: item.name,
          color: COLORS[index],
        }))}
      />
    </div>
  </div>
);

export default CustomPieChart;
