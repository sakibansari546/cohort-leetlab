"use client";
import { useState } from "react";
import {
  ChevronLeft,
  ChevronRight,
  Search,
  Edit,
  Trash,
  MoreHorizontal,
} from "lucide-react";

export default function DataTable({
  columns,
  data,
  title = "Data",
  onEdit = null,
  onDelete = null,
  actions = true,
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchTerm, setSearchTerm] = useState("");
  const itemsPerPage = 10;

  // Filter data based on search term
  const filteredData = data.filter((item) => {
    return Object.values(item).some((value) =>
      String(value).toLowerCase().includes(searchTerm.toLowerCase())
    );
  });

  // Paginate data
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = filteredData.slice(indexOfFirstItem, indexOfLastItem);
  const totalPages = Math.ceil(filteredData.length / itemsPerPage);

  // Change page
  const paginate = (pageNumber) => setCurrentPage(pageNumber);
  const nextPage = () =>
    setCurrentPage((prev) => Math.min(prev + 1, totalPages));
  const prevPage = () => setCurrentPage((prev) => Math.max(prev - 1, 1));

  return (
    <div className="card bg-base-100 shadow-lg">
      <div className="card-body">
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-6">
          <h2 className="card-title">{title}</h2>
          <div className="relative w-full sm:w-64 mt-3 sm:mt-0">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              className="input input-bordered w-full pl-10"
              placeholder="Search..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="table table-zebra w-full">
            <thead>
              <tr>
                {columns.map((column, index) => (
                  <th key={index}>{column.header}</th>
                ))}
                {actions && <th className="text-right">Actions</th>}
              </tr>
            </thead>
            <tbody>
              {currentItems.length > 0 ? (
                currentItems.map((item, rowIndex) => (
                  <tr key={rowIndex}>
                    {columns.map((column, colIndex) => (
                      <td key={colIndex}>
                        {column.render
                          ? column.render(item)
                          : item[column.accessor]}
                      </td>
                    ))}
                    {actions && (
                      <td className="text-right">
                        <div className="flex justify-end gap-2">
                          {onEdit && (
                            <button
                              onClick={() => onEdit(item)}
                              className="btn btn-sm btn-ghost"
                            >
                              <Edit size={16} />
                            </button>
                          )}
                          {onDelete && (
                            <button
                              onClick={() => onDelete(item)}
                              className="btn btn-sm btn-ghost text-error"
                            >
                              <Trash size={16} />
                            </button>
                          )}
                          <div className="dropdown dropdown-end">
                            <div
                              tabIndex={0}
                              role="button"
                              className="btn btn-sm btn-ghost"
                            >
                              <MoreHorizontal size={16} />
                            </div>
                            <ul className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                              <li>
                                <a>View details</a>
                              </li>
                              <li>
                                <a>Export data</a>
                              </li>
                            </ul>
                          </div>
                        </div>
                      </td>
                    )}
                  </tr>
                ))
              ) : (
                <tr>
                  <td
                    colSpan={columns.length + (actions ? 1 : 0)}
                    className="text-center py-4"
                  >
                    No data found
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        {filteredData.length > itemsPerPage && (
          <div className="flex justify-between items-center mt-6">
            <div className="text-sm text-gray-500">
              Showing {indexOfFirstItem + 1} to{" "}
              {Math.min(indexOfLastItem, filteredData.length)} of{" "}
              {filteredData.length} entries
            </div>
            <div className="join">
              <button
                className="join-item btn btn-sm"
                onClick={prevPage}
                disabled={currentPage === 1}
              >
                <ChevronLeft size={16} />
              </button>
              {Array.from({ length: totalPages }, (_, i) => i + 1)
                .filter(
                  (page) =>
                    page === 1 ||
                    page === totalPages ||
                    (page >= currentPage - 1 && page <= currentPage + 1)
                )
                .map((page, index, array) => {
                  // Add ellipsis
                  if (index > 0 && page > array[index - 1] + 1) {
                    return (
                      <button
                        key={`ellipsis-${page}`}
                        className="join-item btn btn-sm btn-disabled"
                      >
                        ...
                      </button>
                    );
                  }

                  return (
                    <button
                      key={page}
                      className={`join-item btn btn-sm ${
                        currentPage === page ? "btn-active" : ""
                      }`}
                      onClick={() => paginate(page)}
                    >
                      {page}
                    </button>
                  );
                })}
              <button
                className="join-item btn btn-sm"
                onClick={nextPage}
                disabled={currentPage === totalPages}
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
