import React, { useState } from "react";
import UserSolvedProblems from "../components/UserSolvedProblems";
import UserSubmissions from "../components/UserSubmissions";
import UserDashBoardHead from "../components/UserDashBoardHead";
import { CheckSquare, FileText, TimerResetIcon } from "lucide-react";
import UserPlaylists from "../components/UserPlaylists";

const TabContentRender = ({ showTab }) => {
  switch (showTab) {
    case "solved_problems":
      return <UserSolvedProblems />;
    case "submissions":
      return <UserSubmissions />;
    case "lists":
      return <UserPlaylists />;
  }
};

const UserDashboardPage = () => {
  const [showTab, setShowTab] = useState("solved_problems");

  return (
    <div className="bg-base-100 py-6">
      <div className="bg-base-100 w-[60%] min-h-screen mx-auto">
        <div className="p-4 space-y-3  w-full">
          <UserDashBoardHead />
          <div className="w-full bg-base-200">
            <div className="p-6">
              <div>
                <div className="bg-base-200 w-full">
                  <div className="tabs tabs-lift border-b border-base-content/10">
                    <label className="tab flex gap-2">
                      <input
                        type="radio"
                        name="user_detail_tab"
                        checked={showTab === "solved_problems"}
                        onChange={() => setShowTab("solved_problems")}
                      />
                      <CheckSquare size="18" />
                      Solved
                    </label>

                    <label className="tab flex gap-2">
                      <input
                        type="radio"
                        name="user_detail_tab"
                        onChange={() => setShowTab("submissions")}
                      />
                      <TimerResetIcon size="18" />
                      Submissions
                    </label>

                    <label className="tab flex gap-2">
                      <input
                        type="radio"
                        name="user_detail_tab"
                        onChange={() => setShowTab("lists")}
                      />
                      <FileText size="18" />
                      Lists
                    </label>
                  </div>

                  <TabContentRender showTab={showTab} />
                </div>

                {/* Bottom */}
                <div></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
