"use client";
import DataTable from "../../components/admin/DataTable";
import { ListPlus, Upload, Download } from "lucide-react";

export default function PlaylistsPage() {
  // Mock playlists data
  const playlists = [
    {
      id: 1,
      title: "Top Interview Questions",
      creator: "Admin",
      creator_id: 0,
      problem_count: 50,
      views: 45678,
      is_official: true,
      is_public: true,
      created_at: "2023-01-10",
      last_updated: "2023-05-01",
    },
    {
      id: 2,
      title: "Dynamic Programming Essentials",
      creator: "Admin",
      creator_id: 0,
      problem_count: 35,
      views: 32543,
      is_official: true,
      is_public: true,
      created_at: "2023-01-15",
      last_updated: "2023-04-20",
    },
    {
      id: 3,
      title: "Graph Algorithms",
      creator: "Admin",
      creator_id: 0,
      problem_count: 28,
      views: 28765,
      is_official: true,
      is_public: true,
      created_at: "2023-01-20",
      last_updated: "2023-04-15",
    },
    {
      id: 4,
      title: "Google Interview Prep",
      creator: "Alex Johnson",
      creator_id: 1,
      problem_count: 42,
      views: 21543,
      is_official: false,
      is_public: true,
      created_at: "2023-02-10",
      last_updated: "2023-05-10",
    },
    {
      id: 5,
      title: "Beginner Friendly Problems",
      creator: "Sarah Chen",
      creator_id: 2,
      problem_count: 20,
      views: 34567,
      is_official: false,
      is_public: true,
      created_at: "2023-02-15",
      last_updated: "2023-04-01",
    },
    {
      id: 6,
      title: "Hard Problems Collection",
      creator: "Michael Rodriguez",
      creator_id: 3,
      problem_count: 30,
      views: 12345,
      is_official: false,
      is_public: true,
      created_at: "2023-02-20",
      last_updated: "2023-04-10",
    },
    {
      id: 7,
      title: "Array Manipulation",
      creator: "Admin",
      creator_id: 0,
      problem_count: 25,
      views: 19876,
      is_official: true,
      is_public: true,
      created_at: "2023-03-01",
      last_updated: "2023-04-25",
    },
    {
      id: 8,
      title: "String Algorithms",
      creator: "Admin",
      creator_id: 0,
      problem_count: 22,
      views: 17654,
      is_official: true,
      is_public: true,
      created_at: "2023-03-05",
      last_updated: "2023-04-30",
    },
    {
      id: 9,
      title: "Binary Tree Problems",
      creator: "Emma Wilson",
      creator_id: 4,
      problem_count: 18,
      views: 15432,
      is_official: false,
      is_public: true,
      created_at: "2023-03-10",
      last_updated: "2023-05-05",
    },
    {
      id: 10,
      title: "Recursion Practice",
      creator: "Daniel Lee",
      creator_id: 5,
      problem_count: 15,
      views: 13210,
      is_official: false,
      is_public: true,
      created_at: "2023-03-15",
      last_updated: "2023-04-15",
    },
    {
      id: 11,
      title: "Greedy Algorithms",
      creator: "Olivia Taylor",
      creator_id: 6,
      problem_count: 12,
      views: 9876,
      is_official: false,
      is_public: false,
      created_at: "2023-03-20",
      last_updated: "2023-04-20",
    },
    {
      id: 12,
      title: "Backtracking Problems",
      creator: "James Brown",
      creator_id: 7,
      problem_count: 10,
      views: 8765,
      is_official: false,
      is_public: false,
      created_at: "2023-03-25",
      last_updated: "2023-04-25",
    },
  ];

  const columns = [
    {
      header: "Title",
      accessor: "title",
      render: (playlist) => (
        <div>
          <a
            href={`/admin/playlists/${playlist.id}`}
            className="link link-hover link-primary"
          >
            {playlist.title}
          </a>
          {playlist.is_official && (
            <span className="badge badge-primary badge-sm ml-2">Official</span>
          )}
          {!playlist.is_public && (
            <span className="badge badge-ghost badge-sm ml-2">Private</span>
          )}
        </div>
      ),
    },
    {
      header: "Creator",
      accessor: "creator",
    },
    {
      header: "Problems",
      accessor: "problem_count",
    },
    {
      header: "Views",
      accessor: "views",
      render: (playlist) => <span>{playlist.views.toLocaleString()}</span>,
    },
    {
      header: "Last Updated",
      accessor: "last_updated",
    },
    {
      header: "Status",
      accessor: "is_public",
      render: (playlist) => (
        <span
          className={`badge ${
            playlist.is_public ? "badge-success" : "badge-ghost"
          }`}
        >
          {playlist.is_public ? "Public" : "Private"}
        </span>
      ),
    },
  ];

  const handleEditPlaylist = (playlist) => {
    console.log("Edit playlist:", playlist);
    // This would open a modal or navigate to an edit page
  };

  const handleDeletePlaylist = (playlist) => {
    if (
      confirm(`Are you sure you want to delete playlist "${playlist.title}"?`)
    ) {
      console.log("Delete playlist:", playlist);
      // This would call an API to delete the playlist
    }
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Playlist Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage problem playlists on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Playlists</div>
              <div className="stat-value">{playlists.length}</div>
              <div className="stat-desc">
                {playlists.filter((p) => p.is_official).length} official,{" "}
                {playlists.filter((p) => !p.is_official).length} user-created
              </div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Views</div>
              <div className="stat-value text-primary">
                {playlists
                  .reduce((acc, playlist) => acc + playlist.views, 0)
                  .toLocaleString()}
              </div>
              <div className="stat-desc">All time</div>
            </div>
            <div className="stat">
              <div className="stat-title">Avg. Problems</div>
              <div className="stat-value">
                {Math.round(
                  playlists.reduce(
                    (acc, playlist) => acc + playlist.problem_count,
                    0
                  ) / playlists.length
                )}
              </div>
              <div className="stat-desc">per playlist</div>
            </div>
          </div>

          <div className="flex gap-2">
            <button className="btn btn-outline btn-sm">
              <Download size={16} className="mr-1" />
              Export
            </button>
            <button className="btn btn-outline btn-sm">
              <Upload size={16} className="mr-1" />
              Import
            </button>
            <button className="btn btn-primary btn-sm">
              <ListPlus size={16} className="mr-1" />
              Create Playlist
            </button>
          </div>
        </div>

        <DataTable
          columns={columns}
          data={playlists}
          title="Playlists"
          onEdit={handleEditPlaylist}
          onDelete={handleDeletePlaylist}
        />
      </div>
    </div>
  );
}
