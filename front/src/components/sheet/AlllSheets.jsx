import React from "react";
import { useGetSheetsQUery } from "../../querys/useSheetQuery";
import { Link } from "react-router-dom";

const AlllSheets = () => {
  const { data, isPending, isError, error } = useGetSheetsQUery();

  if (isPending) {
    return (
      <div className="flex justify-center items-center h-40">
        <span className="loading loading-spinner loading-lg"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex justify-center items-center h-40 text-red-600">
        <span>
          Error: {error?.response?.data?.message || "Something went wrong."}
        </span>
      </div>
    );
  }

  // Define an array of color classes to cycle through
  const cardColors = [
    "bg-emerald-700",
    "bg-indigo-600",
    "bg-amber-500",
    "bg-pink-600",
    "bg-blue-700",
    "bg-purple-700",
    "bg-teal-600",
    "bg-red-600",
    "bg-cyan-700",
  ];

  return (
    <div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
        {data?.sheets.length === 0 ? (
          <div className="col-span-full flex flex-col items-center justify-center py-12">
            <div className="text-2xl font-semibold text-gray-700 mb-2">
              No sheets available
            </div>
            <div className="text-gray-500 mb-4">
              Please check back later or add a new sheet to get started!
            </div>
            <span className="text-4xl">📄</span>
          </div>
        ) : (
          data?.sheets?.map((sheet, idx) => (
            <div
              key={sheet.id}
              className={`card text-white ${
                cardColors[idx % cardColors.length]
              }`}
            >
              <div className="card-body">
                <h2 className="card-title text-xl line-clamp-1">
                  {sheet.title}:
                </h2>
                <p className="line-clamp-2">{sheet.description}</p>
                <div className="card-actions justify-start mt-2">
                  <Link
                    to={`/sheets/${sheet.id}`}
                    className="btn btn-sm bg-white text-emerald-800 border-none hover:bg-white/90"
                  >
                    Start Learning
                  </Link>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default AlllSheets;
