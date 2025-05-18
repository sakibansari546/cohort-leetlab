import React from "react";
import { useState } from "react";

import { Bookmark, Circle, CircleCheckBig } from "lucide-react";
import { Link } from "react-router-dom";

import { THEMES } from "../constants";
import { useThemeStore } from "../store/themeStore";

const Theme = () => {
  const { theme, setTheme } = useThemeStore();

  return (
    <div>
      <div className="h-screen container mx-auto px-4 pt-10 max-w-5xl">
        <div className="space-y-6">
          <div className="flex flex-col gap-1">
            <h2 className="text-lg font-semibold">Theme</h2>
            <p className="text-sm text-base-content/70">
              Choose a theme for your application interface.
            </p>
          </div>

          <div className="grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 gap-2">
            {THEMES?.map((t) => (
              <button
                key={t}
                className={`
                  group flex flex-col items-center gap-1.5 p-2 rounded-lg transition-colors cursor-pointer
                   ${theme === t ? "bg-base-200" : "hover:bg-base-200/50"}
                `}
                onClick={() => setTheme(t)}
              >
                <div
                  className="relative h-8 w-full rounded-md overflow-hidden"
                  data-theme={t}
                >
                  <div className="absolute inset-0 grid grid-cols-4 gap-px p-1">
                    <div className="rounded bg-primary"></div>
                    <div className="rounded bg-secondary"></div>
                    <div className="rounded bg-accent"></div>
                    <div className="rounded bg-neutral"></div>
                  </div>
                </div>
                <span className="text-[11px] font-medium truncate w-full text-center">
                  {t.charAt(0).toUpperCase() + t.slice(1)}
                </span>
              </button>
            ))}
          </div>

          <div className="divider"></div>

          {/* Preview Section */}
          <h3 className="text-lg font-semibold my-3">Preview</h3>
          <div
            data-theme={theme}
            className="rounded-xl border border-base-300 overflow-hidden bg-base-100 shadow-lg"
          >
            <div className="p-4 bg-base-100">
              <div className="">
                {/* Mock Chat UI */}
                <table className="table">
                  <thead>
                    <tr>
                      <th>Status</th>
                      <th>Title</th>
                      <th className="text-right">Acceptance</th>
                      <th>Difficulty</th>
                      <th>Progress</th>
                      <th>Actions</th>
                    </tr>
                  </thead>

                  <tbody key="problem-tbody">
                    <tr className={`bg-base-100`}>
                      <td className="w-8">
                        {true ? (
                          <CircleCheckBig size="18" className="text-success" />
                        ) : (
                          <Circle size="18" />
                        )}
                      </td>
                      <td className="font-medium ">
                        <Link to={`/problems/`} className="hover:underline">
                          <span className="line-clamp-2 break-words max-w-xs">
                            1 Problem Title
                          </span>
                        </Link>
                      </td>
                      <td className="text-right">55.6%</td>
                      <td className={`capitalize text-success`}>
                        <span>Easy</span>
                      </td>
                      <td>
                        <div className="w-24 bg-base-200 rounded-full h-2">
                          <div
                            className="bg-success h-2 rounded-full"
                            style={{ width: "55%" }}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-sm md:btn">
                          <Bookmark size="18" />
                        </button>
                      </td>
                    </tr>
                    <tr className={`bg-base-200`}>
                      <td className="w-8">
                        {false ? (
                          <CircleCheckBig size="18" className="text-success" />
                        ) : (
                          <Circle size="18" />
                        )}
                      </td>
                      <td className="font-medium ">
                        <Link to={`/problems/`} className="hover:underline">
                          <span className="line-clamp-2 break-words max-w-xs">
                            2 Problem Title
                          </span>
                        </Link>
                      </td>
                      <td className="text-right">55.6%</td>
                      <td className={`capitalize text-success`}>
                        <span>Easy</span>
                      </td>
                      <td>
                        <div className="w-24 bg-base-200 rounded-full h-2">
                          <div
                            className="bg-success h-2 rounded-full"
                            style={{ width: "55%" }}
                          ></div>
                        </div>
                      </td>
                      <td>
                        <button className="btn btn-sm md:btn">
                          <Bookmark size="18" />
                        </button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Theme;
