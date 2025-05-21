import React, { useState } from "react";
import { Calendar, Edit, Link, Send, User } from "lucide-react";
const UserBasicInfoTab = () => {
  const [isEdit, setIsEsit] = useState(false);
  return (
    <div className="bg-base-100 border-base-300 p-6">
      <div>
        <form>
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
                      disabled={!isEdit}
                      defaultValue="Male"
                      className="ml-6"
                    >
                      <option disabled={true}>Select Gender</option>
                      <option>Male</option>
                      <option>Female</option>
                      <option>Other</option>
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
                      disabled={!isEdit}
                      type="url"
                      required
                      placeholder="https://"
                      defaultValue="https://"
                    />
                  </label>
                </fieldset>
              </div>
              {/* Github */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-lg">Fullname</legend>
                  <label className="input w-full">
                    <Link size="20" />
                    <input
                      disabled={!isEdit}
                      type="url"
                      required
                      placeholder="https://"
                      defaultValue="https://"
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
                      disabled={!isEdit}
                      type="url"
                      required
                      placeholder="https://"
                      defaultValue="https://"
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
                      disabled={!isEdit}
                      type="url"
                      required
                      placeholder="https://"
                      defaultValue="https://"
                    />
                  </label>
                </fieldset>
              </div>
            </div>
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
