import PieChart from "../components/PieChart";
import LineChart from "../components/LineChart";

const HomePage = () => {
  return (
    <div>
      <p className="inline-block px-6 py-2 mb-2 bg-white font-semibold rounded-md shadow-sm text-[#9b51e0]">
        Dashboard
      </p>

      <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
        <div className="col-span-2 p-4 bg-white rounded-lg shadow-md">
          <LineChart />
        </div>
        <div className="p-4 bg-white rounded-lg shadow-md">
          <PieChart />
        </div>
      </div>
    </div>
  );
};

export default HomePage;
