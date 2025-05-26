import React, { useEffect } from "react";

import useTagInput from "../../hooks/useTagInput";
import { TagField } from "../TagFeild";

import { CheckCircle2, Code2, Loader2, Plus, Send, Trash2 } from "lucide-react";

import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createProblemSchema } from "../../utils/zod-schema";

import Editor from "@monaco-editor/react";
import { useCreateProblemMutation } from "../../querys/useAdminQuery";
import { LANGUAGES } from "../../constants";

// const formDefaultValues = {
//   title: "Add Two Numbers",
//   description:
//     "You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.\n\nYou may assume the two numbers do not contain any leading zero, except the number 0 itself.",
//   difficulty: "MEDIUM",
//   tags: ["linked-list", "math"],
//   company: "Amazon",
//   constraints:
//     "The number of nodes in each linked list is in the range [1, 100]. 0 <= Node.val <= 9. The result list should not have leading zeros except for the number 0 itself.",
//   hints: [
//     "Simulate the elementar y addition digit by digit, keeping track of carry.",
//     "Both lists may have different lengths—treat missing nodes as 0.",
//     "After processing all nodes, if carry > 0, append a new node with carry.",
//   ],

//   examples: [
//     {
//       input: "l1 = [2,4,3], l2 = [5,6,4]",
//       output: "[7,0,8]",
//       explanation: "342 + 465 = 807, stored in reverse as [7,0,8]",
//     },
//     {
//       input: "l1 = [0], l2 = [0]",
//       output: "[0]",
//       explanation: "0 + 0 = 0",
//     },
//     {
//       input: "l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]",
//       output: "[8,9,9,9,0,0,0,1]",
//       explanation: "9999999 + 9999 = 10009998, reversed -> [8,9,9,9,0,0,0,1]",
//     },
//   ],
//   testcases: [
//     { input: "[1,2,3], [4,5,6]", output: "[5,7,9]" },
//     { input: "[9,9,1], [1]", output: "[0,0,2]" },
//     { input: "[0], [7,3]", output: "[7,3]" },
//     { input: "[5], [5]", output: "[0,1]" },
//     { input: "[2,4,9], [5,6,4,9]", output: "[7,0,4,0,1]" },
//   ],
//   codeSnippets: {
//     JAVASCRIPT:
//       "// Definition for singly-linked list.\nfunction ListNode(val, next = null) {\n  this.val = val;\n  this.next = next;\n}\n\nfunction addTwoNumbers(l1, l2) {\n  // Your code here\n}",
//     PYTHON:
//       "# Definition for singly-linked list.\nclass ListNode:\n    def __init__(self, val=0, next=None):\n        self.val = val\n        self.next = next\n\ndef addTwoNumbers(l1, l2):\n    # Your code here\n    pass",
//     JAVA: "// Definition for singly-linked list.\npublic class ListNode {\n    int val;\n    ListNode next;\n    ListNode() {}\n    ListNode(int val) { this.val = val; }\n    ListNode(int val, ListNode next) { this.val = val; this.next = next; }\n}\n\nclass Solution {\n    public ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n        // Your code here\n        return null;\n    }\n}",
//     C: "// Definition for singly-linked list.\nstruct ListNode {\n    int val;\n    struct ListNode *next;\n};\n\nstruct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {\n    // Your code here\n    return NULL;\n}",
//     "C++":
//       "// Definition for singly-linked list.\nstruct ListNode {\n    int val;\n    ListNode *next;\n    ListNode(int x) : val(x), next(nullptr) {}\n};\n\nListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n    // Your code here\n    return nullptr;\n}",
//   },
//   referenceSolutions: {
//     JAVASCRIPT:
//       "// Definition for singly-linked list.\n// function ListNode(val, next = null) {\n//   this.val = val;\n//   this.next = next;\n// }\nfunction addTwoNumbers(l1, l2) {\n  let carry = 0;\n  const dummy = new ListNode(0);\n  let p = dummy;\n  while (l1 || l2 || carry) {\n    const x = l1 ? l1.val : 0;\n    const y = l2 ? l2.val : 0;\n    const sum = x + y + carry;\n    carry = Math.floor(sum / 10);\n    p.next = new ListNode(sum % 10);\n    p = p.next;\n    if (l1) l1 = l1.next;\n    if (l2) l2 = l2.next;\n  }\n  return dummy.next;\n}",
//     PYTHON:
//       "# Definition for singly-linked list.\n# class ListNode:\n#     def __init__(self, val=0, next=None):\n#         self.val = val\n#         self.next = next\n\ndef addTwoNumbers(l1, l2):\n    carry = 0\n    dummy = ListNode(0)\n    p = dummy\n    while l1 or l2 or carry:\n        x = l1.val if l1 else 0\n        y = l2.val if l2 else 0\n        total = x + y + carry\n        carry = total // 10\n        p.next = ListNode(total % 10)\n        p = p.next\n        if l1: l1 = l1.next\n        if l2: l2 = l2.next\n    return dummy.next",
//     JAVA: "// Definition for singly-linked list.\n// public class ListNode { int val; ListNode next; ListNode(int x) { val = x; } }\npublic ListNode addTwoNumbers(ListNode l1, ListNode l2) {\n    ListNode dummy = new ListNode(0);\n    ListNode p = dummy;\n    int carry = 0;\n    while (l1 != null || l2 != null || carry != 0) {\n        int x = (l1 != null) ? l1.val : 0;\n        int y = (l2 != null) ? l2.val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        p.next = new ListNode(sum % 10);\n        p = p.next;\n        if (l1 != null) l1 = l1.next;\n        if (l2 != null) l2 = l2.next;\n    }\n    return dummy.next;\n}",
//     C: "/* Definition for singly-linked list.\n   struct ListNode { int val; struct ListNode *next; };\n*/\nstruct ListNode* addTwoNumbers(struct ListNode* l1, struct ListNode* l2) {\n    int carry = 0;\n    struct ListNode dummy = {0, NULL};\n    struct ListNode *p = &dummy;\n    while (l1 || l2 || carry) {\n        int x = l1 ? l1->val : 0;\n        int y = l2 ? l2->val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        struct ListNode* node = malloc(sizeof(struct ListNode));\n        node->val = sum % 10;\n        node->next = NULL;\n        p->next = node;\n        p = p->next;\n        if (l1) l1 = l1->next;\n        if (l2) l2 = l2->next;\n    }\n    return dummy.next;\n}",
//     "C++":
//       "// Definition for singly-linked list.\n// struct ListNode { int val; ListNode *next; ListNode(int x) : val(x), next(NULL) {} };\nListNode* addTwoNumbers(ListNode* l1, ListNode* l2) {\n    int carry = 0;\n    ListNode dummy(0), *p = &dummy;\n    while (l1 || l2 || carry) {\n        int x = l1 ? l1->val : 0;\n        int y = l2 ? l2->val : 0;\n        int sum = x + y + carry;\n        carry = sum / 10;\n        p->next = new ListNode(sum % 10);\n        p = p->next;\n        if (l1) l1 = l1->next;\n        if (l2) l2 = l2->next;\n    }\n    return dummy.next;\n}",
//   },
//   isDemo: false,
// };
const formDefaultValues = {
  "title": "Valid Palindrome",
  "description": "A phrase is a palindrome if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers. Given a string s, return true if it is a palindrome, or false otherwise.",
  "difficulty": "EASY",
  "tags": ["String", "Two Pointers"],
  "examples": {
    "example1": {
      "input": "A man, a plan, a canal: Panama",
      "output": "true",
      "explanation": "\"amanaplanacanalpanama\" is a palindrome."
    },
    "example2": {
      "input": "race a car",
      "output": "false",
      "explanation": "\"raceacar\" is not a palindrome."
    },
    "example3": {
      "input": " ",
      "output": "true",
      "explanation": "Empty string is a palindrome."
    }
  },
  "constraints": "1 <= s.length <= 2 * 10^5\ns consists only of printable ASCII characters.",
  "hints": [
    "Consider using two pointers, one from the start and one from the end, moving towards the center."
  ],
  
  "testcases": [
    { "input": "A man, a plan, a canal: Panama", "output": "true" },
    { "input": "race a car", "output": "false" },
    { "input": " ", "output": "true" }
  ],
  "codeSnippets": {
    "JAVASCRIPT": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  // Write your code here\n}\n\n// Input parsing & execution\nconst readline = require('readline');\nconst rl = readline.createInterface({ input: process.stdin, output: process.stdout, terminal: false });\nrl.on('line', line => {\n  console.log(isPalindrome(line) ? \"true\" : \"false\");\n  rl.close();\n});",
    "PYTHON": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        # Write your code here\n        pass\n\nif __name__ == \"__main__\":\n    import sys\n    s = sys.stdin.readline().rstrip(\"\\n\")\n    result = Solution().isPalindrome(s)\n    print(str(result).lower())",
    "JAVA": "import java.util.Scanner;\n\npublic class Main {\n    public static String preprocess(String s) {\n        return s.replaceAll(\"[^a-zA-Z0-9]\", \"\").toLowerCase();\n    }\n\n    public static boolean isPalindrome(String s) {\n        // Write your code here\n        return false;\n    }\n\n    public static void main(String[] args) {\n        Scanner sc = new Scanner(System.in);\n        String input = sc.nextLine();\n        System.out.println(isPalindrome(input) ? \"true\" : \"false\");\n        sc.close();\n    }\n}",
    "C": "/* Definition not needed */\n#include <stdio.h>\n#include <ctype.h>\n#include <string.h>\n\nint isPalindrome(const char *s) {\n    // Write your code here\n    return 0;\n}\n\nint main() {\n    char buf[200005];\n    if (!fgets(buf, sizeof(buf), stdin)) return 0;\n    printf(isPalindrome(buf) ? \"true\" : \"false\");\n    return 0;\n}",
    "C++": "#include <bits/stdc++.h>\nusing namespace std;\n\nbool isPalindrome(const string &s) {\n    // Write your code here\n    return false;\n}\n\nint main() {\n    ios::sync_with_stdio(false);\n    cin.tie(nullptr);\n\n    string s;\n    getline(cin, s);\n    cout << (isPalindrome(s) ? \"true\" : \"false\");\n    return 0;\n}"
  },
  "referenceSolutions": {
    "JAVASCRIPT": "/**\n * @param {string} s\n * @return {boolean}\n */\nfunction isPalindrome(s) {\n  s = s.toLowerCase().replace(/[^a-z0-9]/g, '');\n  let i = 0, j = s.length - 1;\n  while (i < j) {\n    if (s[i++] !== s[j--]) return false;\n  }\n  return true;\n}",
    "PYTHON": "class Solution:\n    def isPalindrome(self, s: str) -> bool:\n        filtered = [c.lower() for c in s if c.isalnum()]\n        return filtered == filtered[::-1]",
    "JAVA": "public static boolean isPalindrome(String s) {\n    s = preprocess(s);\n    int i = 0, j = s.length() - 1;\n    while (i < j) if (s.charAt(i++) != s.charAt(j--)) return false;\n    return true;\n}",
    "C": "#include <ctype.h>\n#include <string.h>\n\nint isPalindrome(const char *s) {\n    int i = 0, j = strlen(s) - 1;\n    while (i < j) {\n        while (i < j && !isalnum((unsigned char)s[i])) i++;\n        while (i < j && !isalnum((unsigned char)s[j])) j--;\n        if (tolower(s[i++]) != tolower(s[j--])) return 0;\n    }\n    return 1;\n}",
    "C++": "#include <cctype>\n#include <string>\nusing namespace std;\n\nbool isPalindrome(const string &s) {\n    int i = 0, j = s.size() - 1;\n    while (i < j) {\n        while (i < j && !isalnum(s[i])) i++;\n        while (i < j && !isalnum(s[j])) j--;\n        if (tolower(s[i++]) != tolower(s[j--])) return false;\n    }\n    return true;\n}"
  },
  "company": "LeetCode",
  "isDemo": false
}


const CreateProblemForm = () => {
  const {
    register,
    control,
    handleSubmit,
    reset,
    setValue,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createProblemSchema),
    defaultValues: formDefaultValues,
  });

  const { mutateAsync, isPending, isError, error } = useCreateProblemMutation();

  console.log(errors);

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

  const MAX_TAGS = 10;
  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

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
          <div className="space-y-8 my-4">
            {LANGUAGES.map((language) => (
              <div
                key={language}
                className="card bg-base-2 p-4 md:p-6 shadow-md"
              >
                <h3 className="text-lg md:text-xl font-semibold mb-6 flex items-center gap-2">
                  <Code2 className="w-5 h-5" />
                  {language}
                </h3>

                <div className="space-y-6">
                  {/* Starter Code */}
                  <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <h4 className="font-semibold text-base md:text-lg mb-4">
                        Starter Code Template
                      </h4>
                      <div className="border rounded-md overflow-hidden">
                        <Controller
                          name={`codeSnippets.${language}`}
                          control={control}
                          render={({ field }) => (
                            <Editor
                              height="300px"
                              language={
                                language === "C++"
                                  ? "cpp"
                                  : language.toLowerCase()
                              }
                              theme="vs-dark"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                      {errors.codeSnippets?.[language] && (
                        <div className="mt-2">
                          <span className="text-error text-sm">
                            {errors.codeSnippets[language].message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Reference Solution */}
                  <div className="card bg-base-100 shadow-md">
                    <div className="card-body p-4 md:p-6">
                      <h4 className="font-semibold text-base md:text-lg mb-4 flex items-center gap-2">
                        <CheckCircle2 className="w-5 h-5 text-success" />
                        Reference Solution
                      </h4>
                      <div className="border rounded-md overflow-hidden">
                        <Controller
                          name={`referenceSolutions.${language}`}
                          control={control}
                          render={({ field }) => (
                            <Editor
                              height="300px"
                              language={
                                language === "C++"
                                  ? "cpp"
                                  : language.toLowerCase()
                              }
                              theme="vs-dark"
                              value={field.value}
                              onChange={field.onChange}
                            />
                          )}
                        />
                      </div>
                      {errors.referenceSolutions?.[language] && (
                        <div className="mt-2">
                          <span className="text-error text-sm">
                            {errors.referenceSolutions[language].message}
                          </span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Comany */}
          <div className="form-control mb-4">
            <label htmlFor="company" className="label">
              <span className="label-text mb-2">Company</span>
            </label>
            <div className="w-full">
              <input
                {...register("company")}
                id="company"
                type="text"
                name="company"
                placeholder="Enter company"
                className="input input-bordered w-full"
              />
            </div>
            {errors.company && (
              <label className="label">
                <span className="label-text-alt text-error">
                  {errors.company.message}
                </span>
              </label>
            )}
          </div>

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
