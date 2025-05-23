import React, { useState } from "react";

const useTagInput = (maxTags = 10) => {
  // Keep track of the tags array.

  const [tags, setTags] = useState([]);

  // Function to handle adding the tag to the array

  const handleAddTag = (newTag) => {
    if (newTag && !tags.includes(newTag) && tags.length < maxTags) {
      setTags([...tags, newTag]);
    }
  };

  // Function to remove tag from array
  const handleRemoveTag = (tag) => setTags(tags.filter((t) => t !== tag));

  // Return tags and functions from the hook

  return { tags, handleAddTag, handleRemoveTag };
};

export default useTagInput;
