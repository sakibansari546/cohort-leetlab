import React, { useEffect, useState } from "react";

import useTagInput from "../../hooks/useTagInput";
import { TagField } from "../TagFeild";

import { CheckCircle2, Code2, Loader2, Plus, Send, Trash2 } from "lucide-react";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProblemSchema } from "../../utils/zod-schema";

import Editor from "@monaco-editor/react";
import { useCreateProblemMutation } from "../../querys/useAdminQuery";
import { LANGUAGES } from "../../constants";

import EditorJS from "@editorjs/editorjs";
import Header from "@editorjs/header";
import List from "@editorjs/list";

// const formDefaultValues = {
//   title: "Merge Two Sorted Lists",
//   description:
//     "You are given the heads of two sorted linked lists `list1` and `list2`. Merge the two lists into one sorted list.",
//   difficulty: "EASY",
//   tags: ["Linked List", "Recursion"],
//   constraints:
//     "The number of nodes in both lists is in the range [0, 50].\n-100 ≤ Node.val ≤ 100\nBoth list1 and list2 are sorted in non-decreasing order.",
//   hints: [
//     "Use a dummy node to simplify the merging process.",
//     "Compare the values of the current nodes from both lists.",
//     "Always choose the smaller value and advance that list's pointer.",
//   ],
//   examples: [
//     {
//       input: "list1 = [1,2,4], list2 = [1,3,4]",
//       output: "[1,1,2,3,4,4]",
//       explanation: "Merged in ascending order.",
//     },
//   ],
//   testcases: [
//     { input: "[1,2,4],[1,3,4]", output: "[1,1,2,3,4,4]" },
//     { input: "[], []", output: "[]" },
//   ],
//   // **Naya:** selectedLanguages, codeSnippets, referenceSolutions
//   selectedLanguages: [], // by default koi language select nahi ki
//   codeSnippets: {}, // initially empty object
//   referenceSolutions: {}, // initially empty object
//   company: ["Amazon", "Google"],
//   isDemo: false,
// };

const formDefaultValues = {
  title: "Remove Element",
  description:
    "Given an integer array `nums` and an integer `val`, remove all occurrences of `val` in `nums` in-place. The order of the elements may be changed. Then return the number of elements in `nums` which are not equal to `val`.\n\nConsider the number of elements in `nums` which are not equal to `val` be `k`, to get accepted, you need to do the following things:\n\n1. Change the array `nums` such that the first `k` elements of `nums` contain the elements which are not equal to `val`.\n2. The remaining elements of `nums` are not important as well as the size of `nums`.\n3. Return `k`.",
  difficulty: "EASY",
  tags: ["Array", "Two Pointers"],
  constraints: "0 ≤ nums.length ≤ 100, 0 ≤ nums[i] ≤ 50, 0 ≤ val ≤ 100",
  hints: [
    "Use two pointers approach - one for iterating and one for placing valid elements.",
    "Whenever you find an element not equal to val, place it at the correct position.",
  ],
  testcases: [
    { input: "[3,2,2,3] 3", output: "2" },
    { input: "[0,1,2,2,3,0,4,2] 2", output: "5" },
    { input: "[1] 1", output: "0" },
    { input: "[4,5] 4", output: "1" },
    { input: "[] 0", output: "0" },
  ],
  examples: [
    {
      input: "nums = [3,2,2,3], val = 3",
      output: "2",
      explanation:
        "Your function should return k = 2, with the first two elements of nums being 2. It does not matter what you leave beyond the returned k.",
    },
    {
      input: "nums = [0,1,2,2,3,0,4,2], val = 2",
      output: "5",
      explanation:
        "Your function should return k = 5, with the first five elements of nums containing 0, 0, 1, 3, and 4.",
    },
  ],
  codeSnippets: {
    JAVASCRIPT:
      "/**\n * @param {number[]} nums\n * @param {number} val\n * @return {number}\n */\nfunction removeElement(nums, val) {\n    let k = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] !== val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n}\n\n// I/O\nconst fs = require('fs');\nconst input = fs.readFileSync(0, 'utf-8').trim();\nconst parts = input.split(' ');\nconst arrayPart = parts.slice(0, -1).join(' ');\nconst val = parseInt(parts[parts.length - 1]);\nconst nums = JSON.parse(arrayPart);\nconsole.log(removeElement(nums, val));",
    PYTHON:
      "from typing import List\n\nclass Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        k = 0\n        for i in range(len(nums)):\n            if nums[i] != val:\n                nums[k] = nums[i]\n                k += 1\n        return k\n\nif __name__ == '__main__':\n    import sys\n    import json\n    input_line = sys.stdin.read().strip()\n    parts = input_line.split()\n    array_part = ' '.join(parts[:-1])\n    val = int(parts[-1])\n    nums = json.loads(array_part)\n    print(Solution().removeElement(nums, val))",
    JAVA: 'import java.util.*;\npublic class Main {\n    public int removeElement(int[] nums, int val) {\n        int k = 0;\n        for (int i = 0; i < nums.length; i++) {\n            if (nums[i] != val) {\n                nums[k] = nums[i];\n                k++;\n            }\n        }\n        return k;\n    }\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine().trim();\n        String[] parts = input.split(" ");\n        int val = Integer.parseInt(parts[parts.length - 1]);\n        String arrayStr = String.join(" ", Arrays.copyOf(parts, parts.length - 1));\n        arrayStr = arrayStr.substring(1, arrayStr.length() - 1);\n        String[] elements = arrayStr.split(",");\n        int[] nums = new int[elements.length];\n        for (int i = 0; i < elements.length; i++) {\n            nums[i] = Integer.parseInt(elements[i].trim());\n        }\n        System.out.println(new Main().removeElement(nums, val));\n        sc.close();\n    }\n}',
    C: '#include <stdio.h>\n\nint removeElement(int* nums, int numsSize, int val) {\n    // Write your code here\n    return 0;\n}\n\nint main() {\n    int nums[100], numsSize = 0, val;\n    char c;\n    scanf("%c", &c); // \'[\'\n    while(scanf("%d%c", &nums[numsSize], &c)) {\n        numsSize++;\n        if(c == \']\') break;\n    }\n    scanf("%d", &val);\n    printf("%d", removeElement(nums, numsSize, val));\n    return 0;\n}',
    "C++":
      "#include <bits/stdc++.h>\nusing namespace std;\n\nint removeElement(vector<int>& nums, int val) {\n    // Write your code here\n    return 0;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n    string line;\n    getline(cin, line);\n    vector<int> nums;\n    stringstream ss(line.substr(1, line.length()-2));\n    string num;\n    while(getline(ss, num, ',')) {\n        nums.push_back(stoi(num));\n    }\n    int val;\n    cin >> val;\n    cout << removeElement(nums, val);\n    return 0;\n}",
  },
  referenceSolutions: {
    JAVASCRIPT:
      "function removeElement(nums, val) {\n    let k = 0;\n    for (let i = 0; i < nums.length; i++) {\n        if (nums[i] !== val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n}",
    PYTHON:
      "class Solution:\n    def removeElement(self, nums: List[int], val: int) -> int:\n        k = 0\n        for i in range(len(nums)):\n            if nums[i] != val:\n                nums[k] = nums[i]\n                k += 1\n        return k",
    JAVA: "public int removeElement(int[] nums, int val) {\n    int k = 0;\n    for (int i = 0; i < nums.length; i++) {\n        if (nums[i] != val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n}",
    C: "int removeElement(int* nums, int numsSize, int val) {\n    int k = 0;\n    for (int i = 0; i < numsSize; i++) {\n        if (nums[i] != val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n}",
    "C++":
      "int removeElement(vector<int>& nums, int val) {\n    int k = 0;\n    for (int i = 0; i < nums.size(); i++) {\n        if (nums[i] != val) {\n            nums[k] = nums[i];\n            k++;\n        }\n    }\n    return k;\n}",
  },
  company: "Generic",
  isDemo: true,
};
const CreateProblemForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    watch,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProblemSchema),
    defaultValues: formDefaultValues,
  });

  const { mutateAsync, isPending, isError, error } = useCreateProblemMutation();

  // watch se jo selectedLanguages array hai, woh le lo
  const selectedLanguages = watch("selectedLanguages") || [];

  const {
    fields: exampleFields,
    append: addExample,
    remove: removeExample,
  } = useFieldArray({ control, name: "examples" });

  const {
    fields: testcaseFields,
    append: addTestcase,
    remove: removeTestcase,
  } = useFieldArray({ control, name: "testcases" });

  const {
    fields: hintFields,
    append: addHint,
    remove: removeHint,
  } = useFieldArray({ control, name: "hints" });
  const {
    fields: companyFields,
    append: addCompany,
    remove: removeCompany,
  } = useFieldArray({ control, name: "company" });

  const MAX_TAGS = 10;
  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

  console.log("Errors", errors);
  // Handle form submission
  const handleOnSubmit = async (data) => {
    console.log(data);
    await mutateAsync(data, {
      onSuccess: () => {
        reset();
      },
    });
  };

  useEffect(() => {
    setValue("tags", tags, { shouldValidate: true, shouldDirty: true });
  }, [tags, setValue]);

  return (
    <div className="min-h-screen">
      <div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {/* Title */}
          <div className="form-control mb-4">
            <label htmlFor="title" className="label">
              <span className="label-text mb-2">Title</span>
            </label>
            <div className="w-full">
              <input
                {...register("title")}
                id="title"
                type="text"
                name="title"
                placeholder="Enter problem title"
                className="input input-bordered w-full"
              />
            </div>
            {errors.title && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.title.message}
                </span>
              </label>
            )}
          </div>
          {/* Description */}
          <div className="form-control mb-4">
            <label htmlFor="description" className="label">
              <span className="label-text mb-2">Description</span>
            </label>
            <div className="w-full">
              <textarea
                {...register("description")}
                id="description"
                name="description"
                className="textarea w-full"
                placeholder="Enter problem description"
              ></textarea>
            </div>
            {errors.description && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.description.message}
                </span>
              </label>
            )}
          </div>

          {/* Difficulty */}
          <div className="form-control mb-4">
            <label htmlFor="difficulty" className="label">
              <span className="label-text mb-2">Difficulty</span>
            </label>
            <div className="w-full">
              <select
                {...register("difficulty")}
                name="difficulty"
                defaultValue="Select Difficulty"
                id="difficulty"
                className="select w-full"
              >
                <option disabled={true}>Select Difficulty</option>
                <option>EASY</option>
                <option>MEDIUM</option>
                <option>HARD</option>
              </select>
            </div>
            {errors.difficulty && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.difficulty.message}
                </span>
              </label>
            )}
          </div>
          {/* Tags */}
          <TagField
            tags={tags}
            addTag={handleAddTag}
            removeTag={handleRemoveTag}
            maxTags={MAX_TAGS}
          />
          {errors.tags && (
            <label className="label">
              <span className="label-text-alt text-error">
                {errors.tags.message}
              </span>
            </label>
          )}

          {/* register a hidden input so RHF knows about it too */}
          <input type="hidden" {...register("tags")} />

          {/* Examples */}
          <div className="form-control mb-4">
            <label
              htmlFor="example"
              className="label flex items-center justify-between"
            >
              <span className="label-text mb-2">Examples</span>
              <button
                onClick={() =>
                  addExample({ input: "", output: "", explanation: "" })
                }
                type="button"
                className="btn flex items-center gap-2"
              >
                <Plus size="18" />
                <span>Add Example</span>
              </button>
            </label>
            <div className="w-full">
              <div className="space-y-6">
                {exampleFields.map((field, index) => (
                  <div key={field.id} className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-base md:text-lg font-semibold">
                          Example {index + 1}
                        </h4>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeExample(index)}
                          disabled={exampleFields.length === 1}
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="form-control">
                          <label className="label py-2">
                            <span className="label-text font-medium">
                              Input
                            </span>
                          </label>
                          <textarea
                            className="textarea textarea-bordered min-h-24 w-full p-3 resize-y"
                            {...register(`examples.${index}.input`)}
                            placeholder="Enter input for example"
                            defaultValue={field.input}
                          />
                          {errors.examples?.[index]?.input && (
                            <label className="label">
                              <span className="label-text-alt text-error">
                                {errors.examples[index].input.message}
                              </span>
                            </label>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label py-2">
                            <span className="label-text font-medium">
                              Output
                            </span>
                          </label>
                          <textarea
                            className="textarea textarea-bordered min-h-24 w-full p-3 resize-y"
                            {...register(`examples.${index}.output`)}
                            defaultValue={field.output}
                            placeholder="Enter output for example"
                          />
                          {errors.examples?.[index]?.output && (
                            <label className="label">
                              <span className="label-text-alt text-error">
                                {errors.examples?.[index]?.output.message}
                              </span>
                            </label>
                          )}
                        </div>
                      </div>
                      <div className="">
                        <div className="form-control">
                          <label className="label py-2">
                            <span className="label-text font-medium">
                              Explanation
                            </span>
                          </label>
                          <textarea
                            className="textarea textarea-bordered min-h-24 w-full p-3 resize-y"
                            {...register(`examples.${index}.explanation`)}
                            placeholder="Explain your example"
                            defaultValue={field.explanation}
                          />
                          {errors.examples?.[index]?.explanation && (
                            <label className="label">
                              <span className="label-text-alt text-error">
                                {errors.examples?.[index]?.explanation.message}
                              </span>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* constraints */}
          <div className="form-control mb-4">
            <label htmlFor="constraints" className="label">
              <span className="label-text mb-2">Constraints</span>
            </label>
            <div className="w-full">
              <textarea
                {...register("constraints")}
                id="constraints"
                name="constraints"
                className="textarea w-full"
                placeholder="Enter problem constraints"
              ></textarea>
            </div>
            {errors.constraints && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.constraints.message}
                </span>
              </label>
            )}
          </div>

          {/* /Hints */}
          <div className="form-control mb-4">
            <label
              htmlFor="constraints"
              className="label flex items-center justify-between gap-2 py-4"
            >
              <span className="label-text mb-2">Hints</span>
              <button type="button" className="btn" onClick={() => addHint("")}>
                <Plus className="w-4 h-4 mr-1" /> Add Hint
              </button>
            </label>
            <div className="w-full">
              <div className="">
                {hintFields.map((field, index) => (
                  <div key={field.id}>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        {...register(`hints.${index}`)}
                        defaultValue={field}
                        className="input input-bordered w-full my-3"
                        placeholder={`Hint #${index + 1}`}
                      />

                      <button
                        type="button"
                        className="btn btn-ghost btn-square btn-sm"
                        onClick={() => removeHint(index)}
                        disabled={hintFields.length === 1}
                      >
                        <Trash2 className="w-4 h-4 text-error" />
                      </button>
                    </div>

                    <div>
                      {errors.hints?.[index] && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.hints?.[index].message}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* TestCases */}
          <div className="form-control mb-4">
            <label
              htmlFor="example"
              className="label flex items-center justify-between"
            >
              <span className="label-text mb-2">TestCases</span>
              <button
                onClick={() => addTestcase({ input: "", output: "" })}
                type="button"
                className="btn flex items-center gap-2"
              >
                <Plus size="18" />
                <span>Add TestCase</span>
              </button>
            </label>
            <div className="w-full">
              <div className="space-y-6">
                {testcaseFields.map((field, index) => (
                  <div key={field.id} className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <div className="flex justify-between items-center mb-4">
                        <h4 className="text-base md:text-lg font-semibold">
                          TestCase {index + 1}
                        </h4>
                        <button
                          type="button"
                          className="btn btn-ghost btn-sm text-error"
                          onClick={() => removeTestcase(index)}
                          disabled={testcaseFields.length === 1}
                        >
                          <Trash2 className="w-4 h-4 mr-1" /> Remove
                        </button>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">
                        <div className="form-control">
                          <label className="label py-2">
                            <span className="label-text font-medium">
                              Input
                            </span>
                          </label>
                          <textarea
                            className="textarea textarea-bordered min-h-24 w-full p-3 resize-y"
                            {...register(`testcases.${index}.input`)}
                            placeholder="Enter input for example"
                            defaultValue={field.input}
                          />
                          {errors.testcases?.[index]?.input && (
                            <label className="label">
                              <span className="label-text-alt text-error">
                                {errors.testcases?.[index].input.message}
                              </span>
                            </label>
                          )}
                        </div>
                        <div className="form-control">
                          <label className="label py-2">
                            <span className="label-text font-medium">
                              Output
                            </span>
                          </label>
                          <textarea
                            className="textarea textarea-bordered min-h-24 w-full p-3 resize-y"
                            {...register(`testcases.${index}.output`)}
                            placeholder="Enter output for example"
                            defaultValue={field.output}
                          />
                          {errors.testcases?.[index]?.output && (
                            <label className="label">
                              <span className="label-text-alt text-error">
                                {errors.testcases?.[index].output.message}
                              </span>
                            </label>
                          )}
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* CodeSnippets */}
          {/* --- Naya Section: Languages Select karne ke liye --- */}
          <div className="my-6">
            <label className="block font-medium mb-1">Select Languages</label>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => (
                <label key={lang} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={lang}
                    {...register("selectedLanguages")}
                    className="checkbox"
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
            {errors.selectedLanguages && (
              <p className="text-error text-sm">
                {errors.selectedLanguages.message}
              </p>
            )}
          </div>

          {/* --- Ab watch("selectedLanguages") se selectedLanguages mil raha hai --- */}
          {/* Har ek selected language ke liye do editors dikhao */}
          {selectedLanguages.length > 0 && (
            <div className="space-y-8">
              {selectedLanguages.map((lang) => (
                <div key={lang} className="border border-gray-200 rounded p-4">
                  <h3 className="font-semibold mb-4">{lang} Editors</h3>

                  {/* --- Starter Code / Code Snippet for this language --- */}
                  <div className="mb-6">
                    <label className="block font-medium mb-2">
                      Starter Code Template ({lang})
                    </label>
                    <Controller
                      name={`codeSnippets.${lang}`}
                      control={control}
                      defaultValue={formDefaultValues.codeSnippets[lang] || ""}
                      render={({ field }) => (
                        <Editor
                          height="300px"
                          language={
                            lang.toLowerCase() === "c++"
                              ? "cpp"
                              : lang.toLowerCase()
                          }
                          theme="vs-dark"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.codeSnippets?.[lang] && (
                      <p className="text-error text-sm mt-1">
                        {errors.codeSnippets[lang].message}
                      </p>
                    )}
                  </div>

                  {/* --- Reference Solution for this language --- */}
                  <div>
                    <label className="block font-medium mb-2">
                      Reference Solution ({lang})
                    </label>
                    <Controller
                      name={`referenceSolutions.${lang}`}
                      control={control}
                      defaultValue={
                        formDefaultValues.referenceSolutions[lang] || ""
                      }
                      render={({ field }) => (
                        <Editor
                          height="300px"
                          language={
                            lang.toLowerCase() === "c++"
                              ? "cpp"
                              : lang.toLowerCase()
                          }
                          theme="vs-dark"
                          value={field.value}
                          onChange={field.onChange}
                        />
                      )}
                    />
                    {errors.referenceSolutions?.[lang] && (
                      <p className="text-error text-sm mt-1">
                        {errors.referenceSolutions[lang].message}
                      </p>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* /Company */}
          <div className="form-control mb-4">
            <label
              htmlFor="constraints"
              className="label flex items-center justify-between gap-2 py-4"
            >
              <span className="label-text mb-2">Company</span>
              <button
                type="button"
                className="btn"
                onClick={() => addCompany("")}
              >
                <Plus className="w-4 h-4 mr-1" /> Add Company
              </button>
            </label>
            <div className="w-full">
              <div className="">
                {companyFields.map((field, index) => (
                  <div key={field.id}>
                    <div className="flex gap-2 items-center">
                      <input
                        type="text"
                        {...register(`company.${index}`)}
                        defaultValue={field}
                        className="input input-bordered w-full my-3"
                        placeholder={`Company #${index + 1}`}
                      />

                      <button
                        type="button"
                        className="btn btn-ghost btn-square btn-sm"
                        onClick={() => removeCompany(index)}
                        disabled={companyFields.length === 1}
                      >
                        <Trash2 className="w-4 h-4 text-error" />
                      </button>
                    </div>

                    <div>
                      {errors.company?.[index] && (
                        <label className="label">
                          <span className="label-text-alt text-error">
                            {errors.company?.[index].message}
                          </span>
                        </label>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="mb-4" id="editorjs"></div>

          {/* IsDemo */}
          <div className="form-control mb-4">
            <label htmlFor="isDemo" className="label">
              <span className="label-text mb-2">Is this Demo Problem?</span>
            </label>
            <div className="w-full">
              <input
                {...register("isDemo")}
                id="isDemo"
                type="checkbox"
                name="isDemo"
                className="toggle"
              />
            </div>
            {errors.isDemo && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.isDemo.message}
                </span>
              </label>
            )}
          </div>
          {/* IsDemo */}
          <div className="form-control mb-4">
            <label htmlFor="isPremium" className="label">
              <span className="label-text mb-2">Is this Premium Problem?</span>
            </label>
            <div className="w-full">
              <input
                {...register("isPremium")}
                id="isPremium"
                type="checkbox"
                name="isDemo"
                className="toggle"
              />
            </div>
            {errors.isPremium && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.isPremium.message}
                </span>
              </label>
            )}
          </div>

          <div className="divider"></div>

          {isError && (
            <label className="label">
              <span className="label-text-alt text-error">
                {error?.response?.data?.message || "Something went worng"}
              </span>
            </label>
          )}

          <div className="my-8">
            <button
              disabled={isPending}
              className="btn btn-lg btn-primary"
              type="submit"
            >
              {isPending ? (
                <>
                  <Loader2 className="animate-spin" />
                  Loading
                </>
              ) : (
                <>
                  {" "}
                  <Send />
                  Submit
                </>
              )}
              x
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateProblemForm;
