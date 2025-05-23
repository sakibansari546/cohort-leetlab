import { X } from "lucide-react";
import { useState, ChangeEvent } from "react";

export const TagField = ({ tags, addTag, removeTag, maxTags, ...props }) => {
  // track the use input

  const [userInput, setUserInput] = useState("");

  // Handle input onChange

  const handleInputChange = (e) => {
    setUserInput(e.target.value);
  };

  // handle Enter key press

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      e.preventDefault(); // Prevent form submission or new line creation

      if (
        userInput.trim() !== "" &&
        userInput.length <= 12 &&
        tags.length < maxTags
      ) {
        addTag(userInput);
        setUserInput(""); // Clear the input after adding a tag
      }
    }
  };

  return (
    <div className="form-control mb-4">
      <label htmlFor="tags" className="label">
        <span className="label-text mb-2">Tags</span>
      </label>
      <input
        {...props}
        name="tags"
        id="tags"
        type="text"
        placeholder={
          tags.length < maxTags
            ? "Add a tag"
            : `You can only enter max. of ${maxTags} tags`
        }
        className="input w-full"
        onKeyDown={handleKeyPress}
        onChange={handleInputChange}
        value={userInput}
        disabled={tags.length === maxTags}
      />

      {/* ===== Render the tags here ===== */}

      <div className="flex flex-row flex-wrap gap-3 mt-4">
        {tags.map((tag, index) => (
          <span
            key={`${index}-${tag}`}
            className="inline-flex items-start justify-start px-3 py-2 rounded-[32px] text-sm shadow-sm font-medium  mr-2"
          >
            {tag}
            <button
              className=" text-sm ml-2 mt-1 cursor-pointer"
              onClick={() => removeTag(tag)}
              title={`Remove ${tag}`}
            >
              <X size="16" />
            </button>
          </span>
        ))}
      </div>
    </div>
  );
};
