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

const formDefaultValues = {
  title: "",
  description: "",
  tags: [],
  company: "",
  constraints: "",
  hints: [""],
  examples: [{ input: "", output: "", explanation: "" }],
  testcases: [{ input: "", output: "" }],
  codeSnippets: {
    JAVASCRIPT: "// Enter starter code here...",
    PYTHON: "# Enter starter code here...",
    JAVA: "// Enter starter code here...",
    C: "// Enter starter code here...",
    "C++": "// Enter starter code here...",
  },
  referenceSolutions: {
    JAVASCRIPT: "// Enter reference solution here...",
    PYTHON: "# Enter reference solution here...",
    JAVA: "// Enter reference solution here...",
    C: "// Enter reference solution here...",
    "C++": "// Enter reference solution here...",
  },
  isDemo: false,
};

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
