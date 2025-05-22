"use client";
import { useState, useEffect, useRef } from "react";

// Mock data generation for the chart
const generateData = (days = 30) => {
  const data = [];
  const categories = ["Users", "Problems", "Submissions"];
  const now = new Date();

  for (let i = days - 1; i >= 0; i--) {
    const date = new Date(now);
    date.setDate(date.getDate() - i);

    const dataPoint = {
      date: date.toISOString().split("T")[0],
      Users: Math.floor(Math.random() * 50) + 10,
      Problems: Math.floor(Math.random() * 20) + 5,
      Submissions: Math.floor(Math.random() * 200) + 50,
    };

    data.push(dataPoint);
  }

  return { data, categories };
};

export default function ActivityChart() {
  const [chartData, setChartData] = useState(generateData());
  const [timeRange, setTimeRange] = useState("30");
  const canvasRef = useRef(null);

  useEffect(() => {
    setChartData(generateData(Number.parseInt(timeRange)));
  }, [timeRange]);

  useEffect(() => {
    if (typeof window !== "undefined" && canvasRef.current) {
      // This would use a charting library like Chart.js in a real app
      // For now, we'll render a simple representation
      const canvas = canvasRef.current;
      const ctx = canvas.getContext("2d");

      // Clear canvas
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const { data, categories } = chartData;
      const width = canvas.width;
      const height = canvas.height;
      const padding = 40;

      // Calculate max values for scaling
      const maxValues = {};
      categories.forEach((category) => {
        maxValues[category] = Math.max(...data.map((d) => d[category]));
      });

      // Colors for each category
      const colors = {
        Users: "#3b82f6", // primary
        Problems: "#10b981", // secondary
        Submissions: "#f97316", // accent
      };

      // Draw grid lines
      ctx.strokeStyle = "#e2e8f0";
      ctx.lineWidth = 0.5;

      // Horizontal grid lines
      for (let i = 0; i <= 5; i++) {
        const y = height - padding - (i * (height - padding * 2)) / 5;
        ctx.beginPath();
        ctx.moveTo(padding, y);
        ctx.lineTo(width - padding, y);
        ctx.stroke();
      }

      // Draw each category's line
      categories.forEach((category) => {
        ctx.strokeStyle = colors[category];
        ctx.lineWidth = 2;
        ctx.beginPath();

        data.forEach((point, index) => {
          const x =
            padding + index * ((width - padding * 2) / (data.length - 1));
          const y =
            height -
            padding -
            (point[category] / maxValues[category]) * (height - padding * 2);

          if (index === 0) {
            ctx.moveTo(x, y);
          } else {
            ctx.lineTo(x, y);
          }
        });

        ctx.stroke();
      });

      // X-axis labels (dates)
      ctx.fillStyle = "#1e293b";
      ctx.font = "10px sans-serif";
      ctx.textAlign = "center";

      // Show fewer labels if there are too many
      const step = data.length > 15 ? 5 : 2;
      data.forEach((point, index) => {
        if (index % step === 0 || index === data.length - 1) {
          const x =
            padding + index * ((width - padding * 2) / (data.length - 1));
          ctx.fillText(
            point.date.split("-").slice(1).join("/"),
            x,
            height - 15
          );
        }
      });

      // Legend
      const legendY = 15;
      let legendX = padding;

      categories.forEach((category) => {
        ctx.fillStyle = colors[category];

        // Draw line for legend
        ctx.strokeStyle = colors[category];
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.moveTo(legendX, legendY);
        ctx.lineTo(legendX + 20, legendY);
        ctx.stroke();

        // Draw label
        ctx.fillStyle = "#1e293b";
        ctx.font = "12px sans-serif";
        ctx.textAlign = "left";
        ctx.fillText(category, legendX + 25, legendY + 4);

        legendX += 100;
      });
    }
  }, [chartData]);

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex justify-between items-center mb-6">
          <h2 className="card-title">Activity Overview</h2>
          <select
            className="select select-bordered select-sm w-32"
            value={timeRange}
            onChange={(e) => setTimeRange(e.target.value)}
          >
            <option value="7">Last 7 days</option>
            <option value="30">Last 30 days</option>
            <option value="90">Last 90 days</option>
          </select>
        </div>

        <div className="aspect-[16/9] w-full">
          <canvas
            ref={canvasRef}
            width="800"
            height="400"
            className="w-full h-full"
          ></canvas>
        </div>
      </div>
    </div>
  );
}
