import React, { useState } from "react";
import UserSolvedProblems from "../components/UserSolvedProblems";
import UserSubmissions from "../components/UserSubmissions";
import UserDashBoardHead from "../components/UserDashBoardHead";
import {
  BadgeCheck,
  CheckSquare,
  FileBarChart2,
  FileText,
  Github,
  Globe,
  Linkedin,
  TimerResetIcon,
  Twitter,
} from "lucide-react";
import UserPlaylists from "../components/UserPlaylists";

import GitHubCalendar from "react-github-calendar";
import { useGetSubmissionsQuery } from "../querys/useSubmissionQuery";
import { formateDate } from "../utils/date-formate";
import { useThemeStore } from "../store/themeStore";
import Tippy from "@tippyjs/react";
import { useGetUserQuery } from "../querys/useUserQuery";
import UserSheets from "../components/UserSheets";

const TabContentRender = ({ showTab }) => {
  switch (showTab) {
    case "solved_problems":
      return <UserSolvedProblems />;
    case "submissions":
      return <UserSubmissions />;
    case "lists":
      return <UserPlaylists />;
    case "sheets":
      return <UserSheets />;
    default:
      return null;
  }
};

const UserDashboardPage = () => {
  const [showTab, setShowTab] = useState("solved_problems");
  const { theme } = useThemeStore();
  const { data, isPending, error, isError } = useGetSubmissionsQuery();
  const { data: userData, isPending: userIsPending } = useGetUserQuery();
  const user = userData?.user;

  const graphData =
    data?.submissions?.reduce((acc, curr) => {
      const formattedDate = curr.createdAt.split("T")[0];
      acc[formattedDate] = (acc[formattedDate] || 0) + 1;
      return acc;
    }, {}) || {};

  const values = Object.entries(graphData).map(([date, count]) => ({
    date,
    count,
    level: Math.min(Math.floor(count / 2) + 1, 4), // Convert count to level (1-4)
  }));

  const dates = Object.keys(graphData);
  const startDate =
    dates.length > 0
      ? new Date(Math.min(...dates.map((d) => new Date(d))))
      : new Date();
  const endDate =
    dates.length > 0
      ? new Date(Math.max(...dates.map((d) => new Date(d))))
      : new Date();

  // Extend the range to show full year context
  const yearStart = new Date(startDate.getFullYear(), 0, 1);
  const yearEnd = new Date(endDate.getFullYear(), 11, 31);

  return (
    <div className="bg-base-100 py-6">
      <div className="bg-base-100 w-[60%] min-h-screen mx-auto">
        <div className="p-4 space-y-8 w-full">
          <div>
            <div className="hero bg-base-200 py-12">
              {userIsPending ? (
                <></>
              ) : (
                <div className="hero-content flex-col lg:flex-row gap-16 max-w-4xl">
                  {/* Profile Image */}
                  <div className="flex-shrink-0 relative flex items-center justify-center">
                    <div className="avatar">
                      <div className="relative w-32 h-32 lg:w-40 lg:h-40 rounded-full ring ring-primary ring-offset-base-100 ring-offset-4 overflow-hidden">
                        <img
                          src={user?.profileImage || "/default-avatar.png"}
                          alt={user?.fullname || "User"}
                          className="object-cover w-full h-full"
                        />
                      </div>
                      {/* Rank Badge */}
                      <p className="absolute top-4 leading-tight -right-3 btn btn-circle btn-lg border border-primary rounded-full px-3 py-1 flex items-center shadow text-base z-10">
                        <BadgeCheck size="40" />
                      </p>
                    </div>
                  </div>
                  <div className="text-center lg:text-left space-y-4 flex-1">
                    <div>
                      <h1 className="text-3xl lg:text-4xl font-bold text-base-content">
                        {user?.fullname || "Full Name"}
                      </h1>
                      <p className="text-xl text-primary font-semibold">
                        @{user?.username || "username"}
                      </p>
                      <button className="py-3 pb-0 shadow text-base z-10 font-semibold">
                        Rank
                        <span className="text-primary text-lg font-bold ml-1">
                          #12
                        </span>
                      </button>
                    </div>

                    <p className="text-base-content/80 max-w-md">
                      {user?.basicInfo?.bio ||
                        "Welcome to my coding journey! Passionate about solving problems and building amazing things."}
                    </p>

                    {/* Social Links */}
                    <div className="flex justify-center lg:justify-start gap-4">
                      {user?.basicInfo?.socials?.website && (
                        <a
                          href={user.basicInfo.socials.website}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-outline btn-sm hover:btn-primary"
                        >
                          <Globe size={16} />
                        </a>
                      )}
                      {user?.basicInfo?.socials?.github && (
                        <a
                          href={user.basicInfo.socials.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-outline btn-sm hover:btn-primary"
                        >
                          <Github size={16} />
                        </a>
                      )}
                      {user?.basicInfo?.socials?.twitter && (
                        <a
                          href={user.basicInfo.socials.twitter}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-outline btn-sm hover:btn-primary"
                        >
                          <Twitter size={16} />
                        </a>
                      )}
                      {user?.basicInfo?.socials?.linkedIn && (
                        <a
                          href={user.basicInfo.socials.linkedIn}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn btn-circle btn-outline btn-sm hover:btn-primary"
                        >
                          <Linkedin size={16} />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          </div>

          <UserDashBoardHead />

          {/* Contribution Graph */}
          <div>
            {isPending ? (
              <div className="text-center py-10 loading"></div>
            ) : (
              <GitHubCalendar
                username="dummy-user"
                values={values}
                startDate={yearStart}
                endDate={yearEnd}
                tooltipDataAttrs={(value) => {
                  if (!value || !value.date) return {};
                  return {
                    "data-tip": `${value.date}: ${
                      value.count || 0
                    } submissions`,
                  };
                }}
                transformData={(contributions) => {
                  // Merge your custom data with the default structure
                  return contributions.map((day) => {
                    const customData = values.find((v) => v.date === day.date);
                    return customData ? { ...day, ...customData } : day;
                  });
                }}
              />
            )}
          </div>

          {/* Tabs and Content */}
          <div className="w-full bg-base-200">
            <div className="p-6">
              <div className="bg-base-200 w-full">
                <div className="tabs tabs-lift border-b border-base-content/10">
                  <label className="tab flex gap-2">
                    <input
                      type="radio"
                      name="user_detail_tab"
                      checked={showTab === "solved_problems"}
                      onChange={() => setShowTab("solved_problems")}
                    />
                    <CheckSquare size={18} />
                    Solved
                  </label>

                  <label className="tab flex gap-2">
                    <input
                      type="radio"
                      name="user_detail_tab"
                      checked={showTab === "submissions"}
                      onChange={() => setShowTab("submissions")}
                    />
                    <TimerResetIcon size={18} />
                    Submissions
                  </label>

                  <label className="tab flex gap-2">
                    <input
                      type="radio"
                      name="user_detail_tab"
                      checked={showTab === "lists"}
                      onChange={() => setShowTab("lists")}
                    />
                    <FileText size={18} />
                    Lists
                  </label>

                  <label className="tab flex gap-2">
                    <input
                      type="radio"
                      name="user_detail_tab"
                      checked={showTab === "sheets"}
                      onChange={() => setShowTab("sheets")}
                    />
                    <FileBarChart2 size={18} />
                    Sheets
                  </label>
                </div>

                <TabContentRender showTab={showTab} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserDashboardPage;
