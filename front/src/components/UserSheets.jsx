import React from "react";
import { useGetUserSheetsQuery } from "../querys/useSheetQuery";
import { formateDate } from "../utils/date-formate";
import { Link } from "react-router-dom";
import { Code2 } from "lucide-react";

const UserSheets = () => {
  const { data, isPending, isError, error } = useGetUserSheetsQuery();

  if (isPending) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-6">
          <span className="loading text-2xl"></span>
        </h2>
      </div>
    );
  }

  if (isError) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-4">
          {error?.response?.data?.message || "Something went wrong"}
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-base-300 my-6">
      <div className="w-full flex flex-col gap-3">
        {/* All Lists */}
        {data?.sheets?.length === 0 ? (
          <div>
            <h2 className="text-lg font-bold text-center py-4">
              No Sheets to show
            </h2>
          </div>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <th></th>
              <th>Title</th>
              <th>Languages</th>
              <th>Tags</th>
              <th>BoughtAt</th>
              <th>Problems</th>
            </thead>
            <tbody>
              {data?.sheets?.map((sheet, idx) => (
                <tr key={sheet.id}>
                  <th>{idx + 1}</th>
                  <td className="hover:underline">
                    <Link to={`/sheets/${sheet.id}`}>{sheet.title}</Link>
                  </td>

                  <td>
                    {sheet.languages.map(
                      (lang, idx) =>
                        idx < 1 && (
                          <span className="badge badge-accent badge-sm">
                            {lang}
                          </span>
                        )
                    )}
                  </td>
                  <td>
                    {sheet.tags.length === 0 ? (
                      <span className="badge badge-ghost badge-sm">
                        No Tags
                      </span>
                    ) : (
                      sheet.tags.map(
                        (tag, idx) =>
                          idx <= 3 && (
                            <span className="badge badge-ghost badge-sm">
                              {tag}
                            </span>
                          )
                      )
                    )}
                  </td>
                  <td>
                    <p>{formateDate(sheet.purchases[idx].boughtAt)}</p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Code2 size="18" />
                      {sheet._count.sheetAssignments}
                    </p>
                  </td>
                </tr>
              ))}
              {/* row 1 */}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default UserSheets;
