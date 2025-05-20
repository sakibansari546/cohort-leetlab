import { Cpu, Plus, Timer } from "lucide-react";
import React from "react";

const UserSubmissions = () => {
  return (
    <div className="bg-base-300 border-base-300 py-6">
      <div>
        {" "}
        <table className="table table-zebra">
          {/* head */}

          <tbody>
            {/* row 1 */}
            <tr>
              <th>1</th>
              <td>
                <h2 className={`font-semibold text-error`}>Worng Answer</h2>
                <p>22 May 2025</p>
              </td>
              <td>
                <p className="badge">Javascript</p>
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
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserSubmissions;
