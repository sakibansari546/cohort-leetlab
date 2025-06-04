import {
  Code2,
  FileBarChart,
  FileText,
  ListCheck,
  PlusIcon,
} from "lucide-react";
import { Link, Outlet } from "react-router-dom";

export default function AdminSidebar() {
  return (
    <>
      <button
        data-drawer-target="default-sidebar"
        data-drawer-toggle="default-sidebar"
        aria-controls="default-sidebar"
        type="button"
        className="inline-flex items-center p-2 hover:bg-base-100 mt-2 ms-3 text-sm rounded-lg sm:hidden  btn btn-accent"
      >
        <span className="sr-only">Open sidebar</span>
        <svg
          className="w-6 h-6"
          aria-hidden="true"
          fill="currentColor"
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            clip-rule="evenodd"
            fill-rule="evenodd"
            d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
          ></path>
        </svg>
      </button>

      <aside
        id="default-sidebar"
        className="fixed top-18 left-0 z-40 w-64 h-screen transition-transform -translate-x-full sm:translate-x-0 bg-base-200"
        aria-label="Sidebar"
      >
        <div className="h-full px-3 py-16 overflow-y-auto">
          <ul className="space-y-2 font-medium">
            <li>
              <Link
                to="/admin"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <svg
                  className="w-5 h-5 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 22 21"
                >
                  <path d="M16.975 11H10V4.025a1 1 0 0 0-1.066-.998 8.5 8.5 0 1 0 9.039 9.039.999.999 0 0 0-1-1.066h.002Z" />
                  <path d="M12.5 0c-.157 0-.311.01-.565.027A1 1 0 0 0 11 1.02V10h8.975a1 1 0 0 0 1-.935c.013-.188.028-.374.028-.565A8.51 8.51 0 0 0 12.5 0Z" />
                </svg>
                <span className="ms-3">Dashboard</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create-problem"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <PlusIcon />
                <span className="ms-3">Create Problem</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/create-sheet"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <PlusIcon />
                <span className="ms-3">Create Sheet</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/sheets"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <FileBarChart />
                <span className="ms-3">Sheets</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/problems"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <Code2 />
                <span className="flex-1 ms-3 whitespace-nowrap">Problems</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/users"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <svg
                  className="shrink-0 w-5 h-5 transition duration-75 "
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 18"
                >
                  <path d="M14 2a3.963 3.963 0 0 0-1.4.267 6.439 6.439 0 0 1-1.331 6.638A4 4 0 1 0 14 2Zm1 9h-1.264A6.957 6.957 0 0 1 15 15v2a2.97 2.97 0 0 1-.184 1H19a1 1 0 0 0 1-1v-1a5.006 5.006 0 0 0-5-5ZM6.5 9a4.5 4.5 0 1 0 0-9 4.5 4.5 0 0 0 0 9ZM8 10H5a5.006 5.006 0 0 0-5 5v2a1 1 0 0 0 1 1h11a1 1 0 0 0 1-1v-2a5.006 5.006 0 0 0-5-5Z" />
                </svg>
                <span className="flex-1 ms-3 whitespace-nowrap">Users</span>
              </Link>
            </li>

            <li>
              <Link
                to="/admin/playlists"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <ListCheck />
                <span className="flex-1 ms-3 whitespace-nowrap">Playlists</span>
              </Link>
            </li>
            <li>
              <Link
                to="/admin/submissions"
                className="flex items-center p-2 hover:bg-base-100"
              >
                <FileText />
                <span className="flex-1 ms-3 whitespace-nowrap">
                  Submissions
                </span>
              </Link>
            </li>
          </ul>
        </div>
      </aside>
      <Outlet />
    </>
  );
}
