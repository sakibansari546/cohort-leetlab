import { Circle } from "lucide-react";
import React from "react";
import { Link } from "react-router-dom";

const SheetProblems = ({ problems }) => {
  return (
    <div>
      <div className="flex flex-col gap-5 min-h-[80vh]">
        {problems.length === 0 || !problems ? (
          <div className="bg-base-200 text-center w-full py-4 space-y-3">
            <h1 className="text-lg font-semibold">No Ptoblem to show</h1>
          </div>
        ) : (
          <div className="">
            {/* All Problems */}
            <table className="table">
              <thead>
                <tr>
                  <th>Status</th>
                  <th>Title</th>
                  <th>Difficulty</th>
                  <th>Company</th>
                </tr>
              </thead>
              <tbody>
                {/* row 1 */}
                {problems?.map(({ problem }, idx) => {
                  //   const isSolved = problem.solvedBy?.some(
                  //     (userP) => userP.userId == user?.user?.id
                  //   );
                  return (
                    <tr
                      key={problem.id}
                      className={` ${idx % 2 == 0 && "bg-base-200"} rounded-xl`}
                    >
                      <td className="w-8">
                        <Circle size="18" />
                      </td>
                      <td className="font-medium ">
                        <Link
                          to={`/problems/${problem.id}`}
                          className="hover:underline"
                        >
                          <span className="line-clamp-2 break-words max-w-xs">
                            {problem.title}
                          </span>
                        </Link>
                      </td>
                      <td
                        className={`capitalize ${
                          problem.difficulty === "EASY".toUpperCase()
                            ? "text-success"
                            : problem.difficulty === "MEDIUM".toUpperCase()
                            ? "text-warning"
                            : "text-error"
                        }`}
                      >
                        <span>{problem.difficulty}</span>
                      </td>
                      <td className="text-">
                        {problem.company[0]} {problem.company.length > 1 && "+"}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
};

export default SheetProblems;
