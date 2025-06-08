import React from "react";
import { useParams } from "react-router-dom";
import ProblemsPageSidebar from "../../components/ProblemsPageSidebar";
import {
  useGetSheetByIdQuery,
  useGetSheetFreeDetailsByIdQuery,
} from "../../querys/useSheetQuery";
import { useGetUserQuery } from "../../querys/useUserQuery";
import SheetProblems from "./SheetProblems";
import BuySheetButton from "../../components/sheet/BuySheetButton";

const SheetPage = () => {
  const { sheetId } = useParams();

  const { data: userData } = useGetUserQuery();
  const { data, isPending, isError, error } = useGetSheetByIdQuery(sheetId);
  const { data: freeSheetData, isPending: freeSheetPending } =
    useGetSheetFreeDetailsByIdQuery(sheetId);
  // Dummy data for demonstration; replace with real data fetching logic as needed

  // Calculate how many the user has solved
  const assignments = data?.sheet?.sheetAssignments || [];
  const total = assignments.length;
  const solvedCount = assignments.reduce(
    (acc, { problem }) =>
      acc +
      (problem.solvedBy.some((s) => s.userId === userData?.user?.id) ? 1 : 0),
    0
  );
  const progressPercent =
    total > 0 ? Math.round((solvedCount / total) * 100) : 0;

  if (isPending) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100 text-base-content">
        <span className="loading loading-spinner loading-lg text-primary"></span>
      </div>
    );
  }

  if (
    error?.staus === 403 ||
    (userData?.user?.purchases &&
      !userData.user.purchases.some((purchase) => purchase.sheetId === sheetId))
  ) {
    if (freeSheetPending) {
      return (
        <div className="flex min-h-screen items-center justify-center bg-base-100 text-base-content">
          <span className="loading loading-spinner loading-lg text-primary"></span>
        </div>
      );
    }
    return (
      <div className="flex bg-base-100 text-base-content">
        <ProblemsPageSidebar />
        <div className="bg-base-100 w-full rounded-xl shadow-md p-6 md:p-10 mb-8 flex items-center justify-center">
          <div className="flex flex-col items-center w-full">
            <div className="text-center w-full md:w-3/5 space-y-4">
              <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                {freeSheetData?.sheet?.title}
              </h1>
              <p className="text-base md:text-lg text-base-content/80">
                {freeSheetData?.sheet?.description}
              </p>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {freeSheetData?.sheet?.tags.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
              <div className="flex flex-wrap justify-center gap-2 mt-2">
                {freeSheetData?.sheet?.languages.map((tag) => (
                  <span
                    key={tag}
                    className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="flex items-center flex-col gap-5 justify-between w-full mt-6">
              <p className=" font-semibold flex items-center text-3xl gap-1">
                Price{" "}
                <span className="text-primary font-bold flex items-center ml-2 text-3xl">
                  <span className="">&#8377;</span>
                  <span className="ml-1">{freeSheetData?.sheet?.price}</span>
                </span>
              </p>
              <BuySheetButton sheet={freeSheetData?.sheet} />
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-base-100 text-base-content">
        <div className="text-center">
          <h2 className="text-2xl font-bold text-error mb-2">Error</h2>
          <p className="text-base-content/80">
            {error?.response?.data?.message || "Something went wrong."}
          </p>
        </div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-base-100 text-base-content">
      <ProblemsPageSidebar />
      <div className="flex-1 p-8 md:p-16">
        {/* Sheet Content */}
        <div>
          {/* Sheet Header */}
          <div className="bg-base-200 rounded-xl shadow-md p-6 md:p-10 mb-8 flex items-center justify-center">
            <div className="flex flex-col items-center w-full">
              <div className="text-center w-full md:w-3/5 space-y-4">
                <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-2">
                  {data?.sheet?.title}
                </h1>
                <p className="text-base text-base-content/80">
                  {data?.sheet?.description}
                </p>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {data?.sheet?.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <div className="flex flex-wrap justify-center gap-2 mt-2">
                  {data?.sheet?.languages.map((tag) => (
                    <span
                      key={tag}
                      className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col md:flex-row items-center justify-center py-6 w-full gap-4">
                <div className="flex items-center gap-4 w-full md:w-auto">
                  <progress
                    className="progress progress-primary w-56"
                    value={progressPercent}
                    max="100"
                  ></progress>
                  <span className="font-semibold text-base-content">
                    {solvedCount || 0}/{data?.sheet?.sheetAssignments.length}{" "}
                    Problems
                  </span>
                </div>
              </div>
            </div>
          </div>
          {/* You can add more content here */}
          <div className="my-16">
            <SheetProblems
              user={userData?.user}
              problems={data?.sheet?.sheetAssignments}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SheetPage;
