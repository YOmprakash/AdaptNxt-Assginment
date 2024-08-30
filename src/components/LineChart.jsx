import { IoMdInformationCircleOutline } from "react-icons/io";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "6/30/2024 - 7/6/2024",
    sales: 1404,
    orders: 4,
  },
  {
    name: "7/7/2024 - 7/13/2024",
    sales: 1200,
    orders: 3,
  },
  {
    name: "7/21/2024 - 7/27/2024",
    sales: 800,
    orders: 2,
  },
];

const CustomLineChart = () => {
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <div className="flex items-center gap-2 pb-2 mb-4 border-b">
        <h2 className="pb-2 text-xl font-semibold text-gray-600">Sales vs Orders</h2>
        <IoMdInformationCircleOutline className="text-[20px] text-gray-500" />
      </div>
      <ResponsiveContainer width="100%" height={400}>
        <LineChart
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 20,  
            bottom: 0,  
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <Legend />
          <XAxis dataKey="name" tick={{ fontSize: 12 }} />
          <YAxis yAxisId="left" />
          <YAxis yAxisId="right" orientation="right" />
          <Tooltip />
       
          <Line
            yAxisId="left"
            type="monotone"
            dataKey="orders"
            stroke="#F2784B"
            activeDot={{ r: 8 }}
          />
          <Line
            yAxisId="right"
            type="monotone"
            dataKey="sales"
            stroke="#51C3D3"
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default CustomLineChart;