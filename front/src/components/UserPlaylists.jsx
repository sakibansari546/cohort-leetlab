import { Code2, FileText, ListCheckIcon, Timer } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPlaylistsQuery } from "../querys/usePlaylistQuery";
import { formateDate } from "../utils/date-formate";

const UserPlaylists = () => {
  const { data: lists, isPending, isError, error } = useGetPlaylistsQuery();

  if (isError) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center py-4 text-error">
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
    <div className="bg-base-300 border-base-100 my-6">
      <div className="w-full flex flex-col gap-3">
        {/* All Lists */}
        {lists?.playlists?.length === 0 ? (
          <div>
            <h2 className="text-lg font-bold text-center">
              No Playlists to show
            </h2>
          </div>
        ) : (
          <table className="table table-zebra">
            {/* head */}
            <thead>
              <th></th>
              <th>Name</th>
              <th>CreatedAt</th>
              <th>Problems</th>
            </thead>
            <tbody>
              {lists?.playlists?.map((list, idx) => (
                <tr key={list.id}>
                  <th>{idx + 1}</th>
                  <td className="hover:underline">
                    <Link to={`/playlists/${list.id}`}>{list.name}</Link>
                  </td>
                  <td>
                    <p>{formateDate(list.createdAt)}</p>
                  </td>
                  <td>
                    <p className="flex items-center gap-1.5">
                      <Code2 size="18" />
                      {list.problems?.length}
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

export default UserPlaylists;
