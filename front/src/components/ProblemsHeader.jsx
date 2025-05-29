import { RefreshCcw, Search } from "lucide-react";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { useFilterStore } from "../store/filterStore";

const ProblemsHeader = ({ tags: uniqueTags, companies: uniqueCompanies }) => {
  const [queryParams, setQueryParams] = useSearchParams({
    search: "",
    tags: "",
    difficulty: "",
    companies: "",
  });

  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");
  const [difficulty, setDifficulty] = useState("");
  const [companies, setCompanies] = useState("");

  const { setProblemsFilter } = useFilterStore();

  const handleResetQuery = () => {
    setSearch("");
    setTags("");
    setDifficulty("");
    setCompanies("");
    setQueryParams({ search: "", tags: "", difficulty: "", companies: "" });
    setProblemsFilter({ search: "", tags: "", difficulty: "", companies: "" });
  };

  // On mount, initialize from URL (or blank if empty)
  useEffect(() => {
    setSearch(queryParams.get("search") || "");
    setTags(queryParams.get("tags") || "");
    setDifficulty(queryParams.get("difficulty") || "");
    setCompanies(queryParams.get("companies") || "");
  }, [queryParams]);

  useEffect(() => {
    setQueryParams({ search, tags, difficulty, companies });
    setProblemsFilter({ search, tags, difficulty, companies });
  }, [search, tags, difficulty, companies, setQueryParams, setProblemsFilter]);

  // On mount, initialize from URL (or blank if empty)
  useEffect(() => {
    setSearch(queryParams.get("search") || "");
    setTags(queryParams.get("tags") || "");
    setDifficulty(queryParams.get("difficulty") || "");
    setCompanies(queryParams.get("companies") || "");
  }, [queryParams]);

  useEffect(() => {
    setQueryParams({ search, tags, difficulty, companies });
    setProblemsFilter({ search, tags, difficulty, companies });
  }, [search, tags, difficulty, companies, setQueryParams, setProblemsFilter]);

  const hasParams = [tags, difficulty, companies].some((val) => val);

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="w-full flex items-center justify-between">
          <div>
            <label className="input input-bordered flex items-center gap-2 md:h-8 h-8 rounded-full md:w-60">
              <Search className="w-4 h-4 opacity-50" />
              <input
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
                className="grow bg-transparent outline-none"
              />
            </label>
          </div>
          <div className="flex items-center md:gap-4">
            {hasParams && (
              <div>
                <button
                  onClick={handleResetQuery}
                  className="btn btn-md btn-circle"
                >
                  <RefreshCcw size="18" />
                </button>
              </div>
            )}
            <div>
              <select
                onChange={(e) => setCompanies(e.target.value)}
                className="select select-bordered select-sm rounded-full "
                value={companies}
              >
                <option value={""} className="font-semibold">
                  Companies
                </option>
                {uniqueCompanies.map((company, idx) => (
                  <option className="capitalize" key={idx} value={company}>
                    {company}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                onChange={(e) => setTags(e.target.value)}
                id="countries"
                className="select select-bordered select-sm rounded-full "
                value={tags}
              >
                <option value={""} className="font-semibold">
                  Tags
                </option>
                {uniqueTags.map((tag, idx) => (
                  <option className="capitalize" key={idx} value={tag}>
                    {tag}
                  </option>
                ))}
              </select>
            </div>
            <div>
              <select
                value={difficulty}
                onChange={(e) => setDifficulty(e.target.value)}
                className="select select-bordered select-sm rounded-full "
              >
                <option value={""}>Difficulty</option>
                <option value="easy">Easy</option>
                <option value="medium">Medium</option>
                <option value="hard">Hard</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProblemsHeader;
