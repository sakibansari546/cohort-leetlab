import { Cpu, Plus, Timer } from "lucide-react";
import React from "react";
import { useGetSubmissionsQuery } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";
import { Link } from "react-router-dom";

const UserSubmissions = () => {
  const { data, isPending, isError, error } = useGetSubmissionsQuery();
  const submissions = data?.submissions;

  if (isError) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-4">
          {error?.response?.data?.message || "Something went wrong"}
        </h2>
      </div>
    );
  }

  if (isPending) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-6">
          <span className="loading text-2xl"></span>
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-base-300 my-3">
      <div>
        {" "}
        <table className="table table-zebra">
          {/* head */}
          <thead>
            <th></th>
            <th>Status</th>
            <th>Languge</th>
            <th>Runtime</th>
            <th>Memory</th>
          </thead>
          <tbody>
            {/* row 1 */}
            {submissions.length == 0 ? (
              <div>
                <h2 className="text-lg font-bold text-center py-4">
                  No submission to show
                </h2>
              </div>
            ) : (
              submissions?.map((submission, idx) => {
                const totalTime = JSON.parse(submission?.time || "[]")
                  .reduce((accu, time) => (accu += parseFloat(time)), 0)
                  .toFixed(2);
                const totalMemory = JSON.parse(submission.memory || "[]")
                  .reduce((accu, memory) => (accu += parseFloat(memory)), 0)
                  .toFixed(2);
                return (
                  <tr key={submission.id}>
                    <th>{idx + 1}</th>
                    <td>
                      <Link
                        className="hover:underline"
                        to={`/submissions/${submission.id}`}
                      >
                        <h2
                          className={`font-semibold ${
                            submission.status === "Wrong Answer"
                              ? "text-error"
                              : "text-success"
                          }`}
                        >
                          {submission.status}
                        </h2>
                        <p>{formateDate(submission.createdAt)}</p>
                      </Link>
                    </td>
                    <td>
                      <p className="badge">{submission.language}</p>
                    </td>
                    <td>
                      <p className="flex items-center gap-1.5">
                        <Timer size="18" />
                        {totalTime} s
                      </p>
                    </td>
                    <td>
                      <p className="flex items-center gap-1.5">
                        <Cpu size="18" />
                        {(totalMemory / 1024).toFixed(2)} MB
                      </p>
                    </td>
                  </tr>
                );
              })
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSubmissions;
