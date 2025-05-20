import React, { useMemo, useState } from "react";
import {
  BookOpen,
  Star,
  FileText,
  FilePlus,
  Plus,
  ChevronLeft,
  ChevronRight,
  Lock,
  FolderLock,
} from "lucide-react";
import { useGetPlaylistsQuery } from "../querys/usePlaylistQuery";
import { Link } from "react-router-dom";
import CreatePlaylistModal from "./CreatePlaylistModal";

const ProblemsPageSidebar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { data, isPending, isError, error } = useGetPlaylistsQuery();
  const playlists = data?.playlists;

  const errorMessage =
    error?.response?.data.message || "Failed to load playlists.";

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  return (
    <div>
      {/* Create Playlist Modal */}
      <CreatePlaylistModal />

      <div
        className={`
            fixed top-16 lg:sticky inset-y-0 left-0 z-40
            w-64 bg-base-200 transition-transform duration-300 ease-in-out
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"} 
            lg:translate-x-0 lg:min-h-screen 
        `}
      >
        {/* Sidebar Toggle Btn */}
        <div className="lg:hidden absolute top-1/2 md:top-1/2 -right-5 z-50">
          <button
            className="bg-base-300 z-40 rounded-full cursor-pointer"
            onClick={toggleSidebar}
          >
            {sidebarOpen ? (
              <ChevronLeft size="30" />
            ) : (
              <ChevronRight size="30" />
            )}
          </button>
        </div>

        <div className="flex flex-col h-full overflow-y-auto lg:overflow-visible">
          {/* Main navigation */}
          <div className="p-4 space-y-2">
            <Link
              to="/problems"
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 cursor-pointer"
            >
              <BookOpen className="w-5 h-5" />
              <span className="font-medium">Library</span>
            </Link>
          </div>

          <div className="divider mx-4 my-1"></div>

          {/* Lists section */}
          <div className="p-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm font-medium text-base-content/70">
                My Lists
              </span>
              <button
                onClick={() =>
                  document.getElementById("create-playlist-modal").showModal()
                }
                className="btn btn-sm btn-ghost btn-square"
              >
                <Plus className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-1">
              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-base-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <Star className="w-5 h-5 text-warning" />
                  <span>Favorite</span>
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-xs">
                    <FolderLock size="16" />
                  </span>
                </div>
              </div>

              {/* Playlists */}
              {isError ? (
                <div className="mb-2 p-2 rounded bg-error/20 text-error text-sm flex items-center gap-2">
                  <Lock className="w-4 h-4" />
                  {errorMessage}
                </div>
              ) : isPending ? (
                <div className="flex justify-center items-center py-4">
                  <p className="loading-dots loading loading-lg"></p>
                </div>
              ) : playlists.length == 0 ? (
                <>
                  <div className="mb-2 p-2 rounded bg-error/20 text-error text-sm flex items-center gap-2">
                    {/* <Smile className="w-4 h-4" /> */}
                    {"No Playlist to show."}
                  </div>
                </>
              ) : (
                playlists.map((list) => (
                  <Link key={list.id} to={`/playlists/${list.id}`} className="">
                    <div className="flex items-center justify-between p-2 rounded-lg hover:bg-base-100 cursor-pointer">
                      <div className="flex items-center gap-3">
                        <span className="flex-shrink-0 flex items-center justify-center">
                          <FileText className="w-5 h-5 min-w-[20px] min-h-[20px] text-info" />
                        </span>
                        <span className="line-clamp-1 max-w-[140px]">
                          {list.name}
                        </span>
                      </div>
                      <div className="w-5 h-5 flex items-center justify-center">
                        <span className="text-xs">
                          <FolderLock size="16" />
                        </span>
                      </div>
                    </div>
                  </Link>
                ))
              )}

              <div className="flex items-center justify-between p-2 rounded-lg hover:bg-base-300 cursor-pointer">
                <div className="flex items-center gap-3">
                  <FilePlus className="w-5 h-5 text-success" />
                  <span>New List</span>
                </div>
                <div className="w-5 h-5 flex items-center justify-center">
                  <span className="text-xs">
                    <FolderLock size="16" />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsPageSidebar;
