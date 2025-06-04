import React, { useEffect } from "react";
import { Controller, useFieldArray, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { createSheetSchema } from "../../utils/zod-schema";

import { LANGUAGES } from "../../constants";
import { TagField } from "../TagFeild";
import useTagInput from "../../hooks/useTagInput";
import { useCreateSheetMutation } from "../../querys/useAdminQuery";

const CreateSheetForm = () => {
  const MAX_TAGS = 10;
  //Retrieve all the returned items from the hook
  const { tags, handleAddTag, handleRemoveTag } = useTagInput(MAX_TAGS); // pass the maximum tags

  const {
    register,
    control,
    setValue,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(createSheetSchema),
    defaultValues: {
      title: "",
      description: "",
      languages: [],
      tags: [],
      price: 0,
      isPremium: false,
    },
  });

  const { mutateAsync, isPending, isSuccess, isError, error } =
    useCreateSheetMutation();

  const handleOnSubmit = async (data) => {
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
        {isPending && (
          <div className="flex justify-center items-center my-4">
            <span className="loading loading-spinner loading-lg"></span>
            <span className="ml-2">Creating sheet...</span>
          </div>
        )}
        <form
          aria-disabled={isPending}
          onSubmit={handleSubmit(handleOnSubmit)}
          className="space-y-4"
        >
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

          {/* Languages */}
          <div className="my-6">
            <label className="block font-medium mb-1">Select Languages</label>
            <div className="grid grid-cols-2 gap-2">
              {LANGUAGES.map((lang) => (
                <label key={lang} className="inline-flex items-center gap-2">
                  <input
                    type="checkbox"
                    value={lang}
                    {...register("languages")}
                    className="checkbox"
                  />
                  <span>{lang}</span>
                </label>
              ))}
            </div>
            {errors.languages && (
              <p className="text-error text-sm">{errors.languages.message}</p>
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
          <input type="hidden" {...register("tags")} />

          {/* Price */}
          <div>
            <label className="label">
              <span className="label-text">Price</span>
            </label>
            <input
              type="number"
              min={0}
              step={0.01}
              placeholder="0"
              className={`input input-bordered w-full ${
                errors.price ? "input-error" : ""
              }`}
              {...register("price", { valueAsNumber: true })}
            />
            {errors.price && (
              <span className="text-error text-sm">{errors.price.message}</span>
            )}
          </div>

          {/* Is Premium */}
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

          {/* Submit */}
          <button
            type="submit"
            className="btn btn-primary w-full"
            disabled={isPending}
          >
            {isPending ? "Creating..." : "Create Sheet"}
          </button>
        </form>
      </div>
    </div>
  );
};

export default CreateSheetForm;
