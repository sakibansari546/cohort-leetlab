import { Search } from "lucide-react";
import React, { useState } from "react";

const ProblemsHeader = () => {
  const [search, setSearch] = useState("");
  const [tags, setTags] = useState("");
  const [difficulty, setDifficulty] = useState("");

  console.log("search", search);
  console.log("Tags", tags);
  console.log("Difficulty", difficulty);
  

  return (
    <div>
      <div className="flex flex-wrap gap-2 mb-6">
        <div className="w-full flex items-center justify-between">
          <div>
            <label className="input input-bordered flex items-center gap-2 md:h-8 h-8 rounded-full md:w-60">
              <Search className="w-4 h-4 opacity-50" />
              <input
                onChange={(e) => setSearch(e.target.value)}
                type="search"
                required
                placeholder="Search"
                className="grow bg-transparent outline-none"
              />
            </label>
          </div>
          <div className="flex items-center md:gap-4">
            <div>
              <select
                onChange={(e) => setTags(e.target.value)}
                id="countries"
                className="select select-bordered select-sm rounded-full "
              >
                <option defaultValue className="font-semibold">
                  Tags
                </option>
                <option value="US">United States</option>
                <option value="CA">Canada</option>
                <option value="FR">France</option>
                <option value="DE">Germany</option>
              </select>
            </div>
            <div>
              <select
                onChange={(e) => setDifficulty(e.target.value)}
                className="select select-bordered select-sm rounded-full "
              >
                <option defaultValue>Difficulty</option>
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
