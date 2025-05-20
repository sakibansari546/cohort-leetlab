import { FileText, ListCheckIcon } from "lucide-react";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useGetPlaylistsQuery } from "../querys/usePlaylistQuery";

const UserPlaylists = () => {
  const { data: lists, isPending, isError, error } = useGetPlaylistsQuery();

  if (isError) {
    return (
      <div>
        <h2 className="text-lg font-bold text-center">
          {error?.response?.data?.message}
        </h2>
      </div>
    );
  }

  return (
    <div className="bg-base-300 border-base-300 py-6">
      <div className="w-full flex flex-col gap-3">
        {/* All Lists */}
        {lists?.playlists?.length === 0 ? (
          <div>
            <h2 className="text-lg font-bold text-center">
              No Playlists to show
            </h2>
          </div>
        ) : (
          lists?.playlists?.map((list) => (
            <div className="flex items-center gap-5">
              {/* List */}
              <Link to={`/playlists/${list.id}`} className="w-full bg-base-200">
                <div className="p-3 flex items-center justify-between">
                  <div className="flex items-center gap-4">
                    <FileText size="30" />
                    <h2 className="text-lg font-semibold">{list.name}</h2>
                  </div>
                  <div className="flex items-center gap-1 btn">
                    <ListCheckIcon size="24" />
                    <p className="text-lg font-bold">{list.problems.length}</p>
                  </div>
                </div>
              </Link>
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default UserPlaylists;
