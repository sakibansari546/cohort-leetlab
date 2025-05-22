import { Cpu, Plus, Timer } from "lucide-react";
import React from "react";
import { useGetSubmissionsQuery } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";

const UserSubmissions = () => {
  const { data, isPending, isError, error } = useGetSubmissionsQuery();
  const submissions = data?.submissions;
  console.log(submissions);

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
        <h2 className="text-lg font-bold text-center py-4">
          <span className="loading"></span>
          <span> Loading...</span>
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

          <tbody>
            {/* row 1 */}
            {submissions.length == 0 ? (
              <div>
                <h2 className="text-lg font-bold text-center py-4">
                  No submission to show
                </h2>
              </div>
            ) : (
              submissions?.map((submission, idx) => (
                <tr key={submission.id}>
                  <th>{idx + 1}</th>
                  <td>
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
                  </td>
                  <td>
                    <p className="badge">{submission.language}</p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Timer size="18" />
                      N/A
                    </p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Cpu size="18" />
                      N/A
                    </p>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSubmissions;
