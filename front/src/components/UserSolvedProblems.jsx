import React from "react";
import { Plus } from "lucide-react";
import { Link } from "react-router-dom";

const UserSolvedProblems = () => {
  return (
    <div className="bg-base-300 border-base-300 py-6">
      <div>
        <div className="overflow-x-auto">
          <table className="table table-zebra">
            <tbody>
              {/* row 1 */}
              <tr className="bg-base-00 rounded-lg">
                <th>1</th>
                <td className="hover:underline">
                  <Link to={`/problems/problemId`}>Litle</Link>
                </td>
                <td>Hard</td>
                <td>Company</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default UserSolvedProblems;
