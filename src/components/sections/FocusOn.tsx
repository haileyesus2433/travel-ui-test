import { Card, CardContent } from "@/components/ui/card";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { day: "Mon", previousWeek: 900, thisWeek: 600, difference: 300 },
  { day: "Tues", previousWeek: 1000, thisWeek: 900, difference: 100 },
  { day: "Wed", previousWeek: 1000, thisWeek: 100, difference: 900 },
  { day: "Th", previousWeek: 600, thisWeek: 700, difference: 100 },
];

export default function TravelSalesChart() {
  const formatCurrency = (value) => {
    return `₦${value.toLocaleString()}`;
  };

  const CustomTooltip = ({ active, payload }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 rounded shadow-lg">
          <h3 className="font-bold mb-2">Sales</h3>
          <p>This week: {formatCurrency(payload[1].value)}</p>
          <p>Previous week: {formatCurrency(payload[0].value)}</p>
          <p>
            Difference: {formatCurrency(payload[1].value - payload[0].value)}
          </p>
        </div>
      );
    }
    return null;
  };

  const thisWeekTotal = data.reduce((sum, item) => sum + item.thisWeek, 0);
  const prevWeekTotal = data.reduce((sum, item) => sum + item.previousWeek, 0);
  const difference = thisWeekTotal - prevWeekTotal;

  return (
    <section className="py-8 px-4 md:px-8 bg-gray-100">
    <div className="max-w-6xl mx-auto">
    <div className="flex flex-col lg:flex-row min-h-screen  items-center justify-center">
      <div className="lg:w-1/2 w-full p-8 bg-[#E7F6FF]">
        <Card className="bg-gray-100 border-0 shadow-none -mr-10">
          <CardContent className="pt-6">
            <ResponsiveContainer width="100%" height={300}>
              <BarChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 5 }}
              >
                <XAxis dataKey="day" />
                <YAxis tickFormatter={(va) => formatCurrency(va)} />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="previousWeek" fill="#844AF9" />
                <Bar dataKey="thisWeek" fill="#FFA500" />
                <Bar dataKey="difference" fill="#2970F8" />
              </BarChart>
            </ResponsiveContainer>
          </CardContent>
        </Card>
      </div>
      <div className="lg:w-1/2 p-8 text-gray-900 flex items-center">
        <div>
          <h2 className="text-2xl text-black font-bold mb-4">
            Focus on what matters
          </h2>
          <p className="mb-4">
            We take care of the intricate details of travel expertise,
            accreditation, and airline partnerships, so you don't have to—no
            need for additional development resources. Your customers can easily
            book flights with over 900 top airlines worldwide, along with
            accommodations, tours, and insurance. We save you time and resources
            so that you can focus on what matters most - running your business.
          </p>
    
        </div>
      </div>
    </div>
    </div>
    </section>
  );
}
