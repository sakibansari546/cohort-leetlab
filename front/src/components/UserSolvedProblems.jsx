import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";
import { useGetSolvedProblemsQuery } from "../querys/useProblemQuery";

const UserSolvedProblems = () => {
  const { data, isPending, isError, error } = useGetSolvedProblemsQuery();
  const problems = data?.solvedProblems;

  if (isPending) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-4">
          <span className="loading"></span>
          <span> Loading...</span>
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-4 text-error">
          {error?.response?.data?.message || "Something went wrong"}
        </h2>
      </div>
    );
  }
  return (
    <div className="bg-base-100 border-base-300 my-6">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {problems?.length == 0 ? (
                <div>
                  <h2 className="text-lg font-bold text-center">
                    No Playlists to show
                  </h2>
                </div>
              ) : (
                problems?.map((problem, idx) => (
                  <tr key={problem.id} className="bg-base-00 rounded-lg">
                    <th>{idx + 1}</th>
                    <td className="hover:underline">
                      <Link to={`/problems/problemId`}>{problem.title}</Link>
                    </td>
                    <td
                      className={`${
                        problem.difficulty == "EASY"
                          ? "text-success"
                          : problem.difficulty == "MEDIUM"
                          ? "text-warning"
                          : "text-error"
                      }`}
                    >
                      {problem.difficulty}
                    </td>
                    <td>Company</td>
                  </tr>
                ))
              )}

              {/* row 1 */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSolvedProblems;
