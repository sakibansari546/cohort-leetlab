import React, { useState } from "react";
import { Calendar, Edit, Link, Send, User } from "lucide-react";
import { useGetUserQuery } from "../querys/useUserQuery";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { updateUserBasicInfoSchema } from "../utils/zod-schema";

const UserBasicInfoTab = () => {
  const [isEdit, setIsEsit] = useState(false);
  const { data, isError, error } = useGetUserQuery();
  const user = data?.user;

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(updateUserBasicInfoSchema),
  });

  console.log(errors);
  const handleOnSubmit = (data) => {
    console.log(data);
  };

  if (isError) {
    return (
      <div className="w-full flex items-center flex-col justify-center h-[70vh]">
        <h3 className="text-2xl font-bold">{error?.response?.data?.message}</h3>
      </div>
    );
  }

  return (
    <div className="bg-base-100 border-base-300 p-6">
      <div>
        <form onSubmit={handleSubmit(handleOnSubmit)}>
          {/* Basic Info */}
          <div className="pb-4">
            <h3 className="text-xl font-bold">Basic Infomation</h3>
            <div className="py-2">
              {/* Fullname */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Fullname</legend>
                  <label className="input w-full">
                    <User size="20" />
                    <input
                      {...register("fullname")}
                      name="fullname"
                      defaultValue={user?.fullname}
                      disabled={!isEdit}
                      type="text"
                      className="pl-2"
                      placeholder="Fullname"
                    />
                  </label>
                </fieldset>
              </div>
              {/* Username */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Username</legend>
                  <label className="input w-full">
                    <User size="20" />
                    <input
                      {...register("username")}
                      name="username"
                      defaultValue={user?.username}
                      disabled={!isEdit}
                      type="text"
                      className="pl-2"
                      placeholder="@Username"
                    />
                  </label>
                </fieldset>
              </div>

              {/* Gender */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Gender</legend>
                  <label className="select w-full">
                    <select
                      {...register("gender")}
                      name="gender"
                      disabled={!isEdit}
                      defaultValue={user?.basicInfo?.gender}
                      className="ml-6"
                    >
                      <option disabled={true}>Select Gender</option>
                      <option>MALE</option>
                      <option>FEMALE</option>
                      <option>OTHER</option>
                    </select>
                  </label>
                </fieldset>
              </div>
              {/* Date of birth */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Birth</legend>
                  <label className="input w-full">
                    <Calendar size="20" />
                    <input
                      {...register("birth")}
                      name="birth"
                      defaultValue={
                        (user?.basicInfo?.birth, { valueAsDate: true })
                      }
                      disabled={!isEdit}
                      type="date"
                      className="pl-2"
                      placeholder="Type here"
                    />
                  </label>
                </fieldset>
              </div>
              {/* Bio */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Bio</legend>
                  <textarea
                    {...register("bio")}
                    name="bio"
                    defaultValue={user?.basicInfo?.bio}
                    disabled={!isEdit}
                    className="textarea w-full"
                    placeholder="Bio"
                  ></textarea>
                  {/* </label> */}
                </fieldset>
              </div>
            </div>
          </div>

          {/* Solicals */}
          <div className="pb-4">
            <h3 className="text-xl font-bold">Socials</h3>
            <div className="py-2">
              {/* Website */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Website</legend>
                  <label className="input w-full">
                    <Link size="20" />
                    <input
                      {...register("website")}
                      name="website"
                      disabled={!isEdit}
                      type="text"
                      placeholder="https://"
                      defaultValue={
                        user?.basicInfo?.socials.website || "https://"
                      }
                    />
                  </label>
                </fieldset>
              </div>
              {/* Github */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Github</legend>
                  <label className="input w-full">
                    <Link size="20" />
                    <input
                      {...register("github")}
                      name="github"
                      disabled={!isEdit}
                      type="text"
                      placeholder="https://"
                      defaultValue={
                        user?.basicInfo?.socials.github || "https://"
                      }
                    />
                  </label>
                </fieldset>
              </div>
              {/* Twitter */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Twitter</legend>
                  <label className="input w-full">
                    <Link size="20" />
                    <input
                      {...register("twitter")}
                      name="twitter"
                      disabled={!isEdit}
                      type="text"
                      placeholder="https://"
                      defaultValue={
                        user?.basicInfo?.socials.twitter || "https://"
                      }
                    />
                  </label>
                </fieldset>
              </div>
              {/* LinkdeIn */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">LinkdeIn</legend>
                  <label className="input w-full">
                    <Link size="20" />
                    <input
                      {...register("linkedIn")}
                      name="linkedIn"
                      disabled={!isEdit}
                      type="text"
                      placeholder="https://"
                      defaultValue={
                        user?.basicInfo?.socials.linkedIn || "https://"
                      }
                    />
                  </label>
                </fieldset>
              </div>
            </div>
          </div>

          <div className="py-3">
            <p className="text-error">Error</p>
          </div>

          <div className="flex items-center gap-4 justify-end">
            <div>
              {!isEdit ? (
                <button
                  type="button"
                  onClick={() => setIsEsit(true)}
                  className="btn btn-primary flex items-center btn-md"
                >
                  <Edit size="18" />
                  <span>Edit</span>
                </button>
              ) : (
                <div className="flex items-center gap-4">
                  {" "}
                  <button
                    type="button"
                    onClick={() => setIsEsit(false)}
                    className="btn flex items-center btn-md"
                  >
                    <span>Cancle</span>
                  </button>
                  <button
                    type="submit"
                    className="btn btn-primary flex items-center btn-md"
                  >
                    <Send className="mt-0.5" size="18" />
                    <span>Submit</span>
                  </button>
                </div>
              )}
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default UserBasicInfoTab;
