"use client";
import { useState } from "react";
import { Save } from "lucide-react";

export default function ProblemForm({ initialData = null }) {
  const [formData, setFormData] = useState({
    title: initialData?.title || "",
    difficulty: initialData?.difficulty || "Medium",
    category: initialData?.category || "",
    tags: initialData?.tags ? initialData.tags.join(", ") : "",
    description: initialData?.description || "",
    constraints: initialData?.constraints || "",
    input_format: initialData?.input_format || "",
    output_format: initialData?.output_format || "",
    sample_input: initialData?.sample_input || "",
    sample_output: initialData?.sample_output || "",
    explanation: initialData?.explanation || "",
    solution: initialData?.solution || "",
    time_complexity: initialData?.time_complexity || "",
    space_complexity: initialData?.space_complexity || "",
    is_premium: initialData?.is_premium || false,
    is_published: initialData?.is_published || false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Format the data
    const finalData = {
      ...formData,
      tags: formData.tags
        .split(",")
        .map((tag) => tag.trim())
        .filter((tag) => tag),
    };

    // Here you would submit the data to your API
    console.log("Form submitted:", finalData);

    // Show success message
    alert("Problem saved successfully!");
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4">Problem Information</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Problem Title</span>
              </label>
              <input
                type="text"
                name="title"
                value={formData.title}
                onChange={handleChange}
                placeholder="e.g. Two Sum"
                className="input input-bordered w-full"
                required
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Category</span>
              </label>
              <input
                type="text"
                name="category"
                value={formData.category}
                onChange={handleChange}
                placeholder="e.g. Array, Hash Table"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Difficulty</span>
              </label>
              <select
                name="difficulty"
                value={formData.difficulty}
                onChange={handleChange}
                className="select select-bordered w-full"
              >
                <option>Easy</option>
                <option>Medium</option>
                <option>Hard</option>
              </select>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Tags (comma separated)</span>
              </label>
              <input
                type="text"
                name="tags"
                value={formData.tags}
                onChange={handleChange}
                placeholder="e.g. Array, Hash Table, Two Pointers"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4">Problem Description</h2>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              className="textarea textarea-bordered h-32"
              placeholder="Detailed problem description..."
              required
            ></textarea>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Constraints</span>
            </label>
            <textarea
              name="constraints"
              value={formData.constraints}
              onChange={handleChange}
              className="textarea textarea-bordered h-24"
              placeholder="Input constraints, e.g. 1 <= nums.length <= 10^5"
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Input Format</span>
              </label>
              <textarea
                name="input_format"
                value={formData.input_format}
                onChange={handleChange}
                className="textarea textarea-bordered h-24"
                placeholder="Describe the input format..."
              ></textarea>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Output Format</span>
              </label>
              <textarea
                name="output_format"
                value={formData.output_format}
                onChange={handleChange}
                className="textarea textarea-bordered h-24"
                placeholder="Describe the expected output format..."
              ></textarea>
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4">Examples</h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sample Input</span>
              </label>
              <textarea
                name="sample_input"
                value={formData.sample_input}
                onChange={handleChange}
                className="textarea textarea-bordered h-24 font-mono"
                placeholder="[2,7,11,15]&#10;9"
              ></textarea>
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Sample Output</span>
              </label>
              <textarea
                name="sample_output"
                value={formData.sample_output}
                onChange={handleChange}
                className="textarea textarea-bordered h-24 font-mono"
                placeholder="[0,1]"
              ></textarea>
            </div>
          </div>

          <div className="form-control w-full mt-4">
            <label className="label">
              <span className="label-text">Explanation</span>
            </label>
            <textarea
              name="explanation"
              value={formData.explanation}
              onChange={handleChange}
              className="textarea textarea-bordered h-24"
              placeholder="Explain the example solution..."
            ></textarea>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4">Solution & Complexity</h2>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Solution Approach</span>
            </label>
            <textarea
              name="solution"
              value={formData.solution}
              onChange={handleChange}
              className="textarea textarea-bordered h-48 font-mono"
              placeholder="Describe the solution approach..."
            ></textarea>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Time Complexity</span>
              </label>
              <input
                type="text"
                name="time_complexity"
                value={formData.time_complexity}
                onChange={handleChange}
                placeholder="e.g. O(n)"
                className="input input-bordered w-full"
              />
            </div>

            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Space Complexity</span>
              </label>
              <input
                type="text"
                name="space_complexity"
                value={formData.space_complexity}
                onChange={handleChange}
                placeholder="e.g. O(n)"
                className="input input-bordered w-full"
              />
            </div>
          </div>
        </div>
      </div>

      <div className="card bg-base-100 shadow-lg">
        <div className="card-body">
          <h2 className="card-title mb-4">Publication Settings</h2>

          <div className="flex flex-col md:flex-row gap-8">
            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-4">Premium Problem</span>
                <input
                  type="checkbox"
                  name="is_premium"
                  checked={formData.is_premium}
                  onChange={handleChange}
                  className="toggle toggle-primary"
                />
              </label>
            </div>

            <div className="form-control">
              <label className="label cursor-pointer">
                <span className="label-text mr-4">Publish Immediately</span>
                <input
                  type="checkbox"
                  name="is_published"
                  checked={formData.is_published}
                  onChange={handleChange}
                  className="toggle toggle-primary"
                />
              </label>
            </div>
          </div>
        </div>
      </div>

      <div className="flex justify-end gap-4">
        <button type="button" className="btn btn-outline">
          Cancel
        </button>
        <button type="submit" className="btn btn-primary">
          <Save size={18} className="mr-2" />
          Save Problem
        </button>
      </div>
    </form>
  );
}
