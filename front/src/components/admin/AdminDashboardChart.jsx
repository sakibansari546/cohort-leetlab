import React from "react";
import Chart from "react-apexcharts";
import { ChartNoAxesCombinedIcon } from "lucide-react";

const chartConfig = {
  series: [
    {
      name: "Sales",
      data: [50, 40, 300, 320, 500, 350, 200, 230, 500],
    },
  ],
  options: {
    chart: { toolbar: { show: false }, background: "transparent" },
    dataLabels: { enabled: false },
    colors: ["var(--pf)"], // use primary-focus for extra pop
    plotOptions: {
      bar: { columnWidth: "45%", borderRadius: 6 },
    },
    xaxis: {
      labels: {
        style: {
          colors: "var(--bc)", // base-content
          fontSize: "12px",
        },
      },
      categories: [
        "Apr",
        "May",
        "Jun",
        "Jul",
        "Aug",
        "Sep",
        "Oct",
        "Nov",
        "Dec",
      ],
      axisBorder: { show: false },
      axisTicks: { show: false },
    },
    yaxis: {
      labels: {
        style: {
          colors: "var(--bc)",
          fontSize: "12px",
        },
      },
    },
    grid: {
      borderColor: "var(--bt)", // base-300
      strokeDashArray: 3,
      xaxis: { lines: { show: true } },
      yaxis: { lines: { show: false } },
      padding: { top: 12, right: 20, left: 0, bottom: 0 },
    },
    fill: { opacity: 0.9 },
    tooltip: { theme: "dark" },
  },
  type: "bar",
  height: 260,
};

export default function AdminDashboardChart() {
  return (
    <div className="card bg-base-200 shadow-xl ring-1 ring-base-300 rounded-xl overflow-hidden">
      <div className="flex flex-col md:flex-row items-center gap-4 px-6 py-4 bg-base-300">
        <div className="p-3 bg-base-100 rounded-md">
          <ChartNoAxesCombinedIcon className="h-6 w-6 text-primary-focus" />
        </div>
        <div>
          <h3 className="text-lg font-semibold text-base-content">
            Platform Overview
          </h3>
          <p className="text-sm text-base-content/70">
            Monthly users, problems, playlists figures.
          </p>
        </div>
      </div>

      <div className="p-4 bg-base-200">
        <Chart {...chartConfig} />
      </div>
    </div>
  );
}
