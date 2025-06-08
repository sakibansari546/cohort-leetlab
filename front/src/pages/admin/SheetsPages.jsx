import { Link } from "react-router-dom";
import {
  FilePlus,
  Upload,
  Download,
  Trash2,
  Loader2,
  Edit,
  Ellipsis,
  Plus,
} from "lucide-react";
import {
  useDeleteSheetMuatation,
  useGetAllSheetsQuery,
} from "../../querys/useAdminQuery";
import { formateDate } from "../../utils/date-formate";

export default function SheetsPage() {
  const { data, isPending, isError, error } = useGetAllSheetsQuery();
  const deleteMutation = useDeleteSheetMuatation();

  const handleSheetDelete = async (sheetId) => {
    await deleteMutation.mutateAsync({ sheetId });
  };

  if (isError) {
    return (
      <div class="p-4 sm:ml-64 w-full">
        <div class="p-4 rounded-lg max-h-[80vh]">
          <div className="flex items-center py-6">
            <h1 className="text-2xl font-semibold text-center w-full">
              {error?.response?.data?.message || "Something went wrong"}
            </h1>
          </div>
        </div>
      </div>
    );
  }

  if (isPending) {
    return (
      <div className="p-4  w-full flex items-center justify-center min-h-[60vh]">
        <Loader2 className="animate-spin mr-2" size={32} />
      </div>
    );
  }

  return (
    <div class="p-4 sm:ml-64 min-h-screen">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Problem Management</h1>
          <p className="text-base-content opacity-70">
            View, add, edit and manage sheets on HypeCoding.
          </p>
        </div>

        <div className="flex flex-col md:flex-row justify-between gap-4 mb-6">
          <div className="stats bg-base-100 shadow">
            <div className="stat">
              <div className="stat-title">Total Problems</div>
              <div className="stat-value">{data?.sheets?.length}</div>
            </div>
            <div className="stat">
              <div className="stat-title">Total Price</div>
              <div className="stat-value text-secondary">
                ₹
                {data?.sheets
                  ?.reduce((acc, sheet) => acc + sheet.price, 0)
                  .toLocaleString()}
              </div>
              <div className="stat-desc">All time</div>
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
            <Link
              href="/admin/create-problem"
              className="btn btn-primary btn-sm"
            >
              <FilePlus size={16} className="mr-1" />
              Add Problem
            </Link>
          </div>
        </div>

        <div>
          {data?.sheets?.length == 0 ? (
            <div className="w-full py-10">
              <h2 className="text-center">No Sheets to show</h2>
            </div>
          ) : (
            <table className="table table-zebra w-full">
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Tags</th>
                  <th>Languages</th>
                  <th>Price</th>
                  <th>CreatedAt</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {data?.sheets?.map((sheet, idx) => (
                  <tr key={sheet.id}>
                    <td className="w-[40%]">
                      <Link
                        to={`/sheets/${sheet.id}`}
                        className="text-primary hover:underline line-clamp-1"
                      >
                        {sheet.title}
                      </Link>
                    </td>
                    <td className="max-w-l">
                      {sheet.tags.map(
                        (tag, i) =>
                          i < 2 && (
                            <span key={i} className="badge badge-sm">
                              {tag}
                            </span>
                          )
                      )}
                    </td>

                    <td className="max-w-l">
                      {sheet.languages.map(
                        (lang, i) =>
                          i < 2 && (
                            <span key={i} className="badge badge-sm">
                              {lang}
                            </span>
                          )
                      )}
                      {sheet.languages.length > 2 && "+"}
                    </td>

                    <td className="text-primary">₹{sheet.price}</td>
                    <td>{formateDate(sheet.createdAt).split("-")[0]}</td>

                    <td>
                      <div className="flex items-center gap-2">
                        <div className="dropdown dropdown-end">
                          <button
                            tabIndex={0}
                            role="button"
                            className="btn btn-sm"
                          >
                            <Ellipsis size="16" />
                          </button>
                          <ul
                            tabIndex={0}
                            className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm"
                          >
                            <li>
                              <button className="flex items-center gap-3">
                                <Plus size="18" />
                                Add Problems
                              </button>
                            </li>
                            <li>
                              <button className="flex items-center gap-3">
                                <Edit size="18" />
                                Edit
                              </button>
                            </li>
                            <li>
                              <button
                                onClick={() => handleSheetDelete(sheet.id)}
                                className="flex items-center gap-3 text-error"
                              >
                                {deleteMutation.isPending ? (
                                  <>
                                    {" "}
                                    <Loader2
                                      className="animate-spin"
                                      size="18"
                                    />
                                    Loading
                                  </>
                                ) : (
                                  <>
                                    {" "}
                                    <Trash2 size="18" />
                                    Delete
                                  </>
                                )}
                              </button>
                            </li>
                          </ul>
                        </div>
                      </div>
                    </td>
                  </tr>
                ))}
                {/* Row 1 */}
              </tbody>
            </table>
          )}
        </div>
      </div>
    </div>
  );
}
