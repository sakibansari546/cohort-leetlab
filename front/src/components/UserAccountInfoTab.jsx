import React from "react";
import { useGetUserQuery } from "../querys/useUserQuery";
import { Dot, Key, User } from "lucide-react";
import { Link } from "react-router-dom";
import { formateDate } from "../utils/date-formate";

const UserAccountInfoTab = () => {
  const { data: userData } = useGetUserQuery();
  return (
    <div className=" bg-base-100 border-base-300 p-6">
      <div>
        <div>
          <div>
            <div>
              {/* Email */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-[16px]">Email</legend>
                  <label className="input w-full">
                    <User size="20" />
                    <input
                      value={userData?.user?.email}
                      name="email"
                      disabled
                      type="text"
                      className="pl-2"
                      placeholder="Fullname"
                    />
                  </label>
                </fieldset>
              </div>
              {/* Password */}
              <div className="w-full">
                <fieldset className="fieldset w-full">
                  <legend className="fieldset-legend text-[16px]">
                    Password
                  </legend>
                  <label className="input w-full">
                    <Key size="20" />
                    <input
                      value="•••••••••"
                      name="email"
                      disabled
                      type="text"
                      className="pl-2"
                      placeholder="Fullname"
                    />
                  </label>
                </fieldset>
              </div>
              <div className="text-right w-full py-4">
                <Link to="#" className="link my-3 ">
                  <span>Change Password</span>
                </Link>
              </div>
            </div>
            <div></div>
          </div>
        </div>
        <div className="divider"></div>
        <div>
          <h2 className="text-xl font-semibold py-4 pb-6">
            Account Information
          </h2>
          <div>
            <div className="flex items-center justify-between py-2">
              <h3 className="text-lg font-">Member Since</h3>
              <span>{formateDate(userData?.user.createdAt).split("-")[0]}</span>
            </div>
            <div className="divider my-2"></div>
          </div>
          <div className="flex items-center justify-between py-2">
            <h3 className="text-lg font-">Account Status</h3>
            <p className="flex items-center gap-2 text-success">
              <Dot size="30" /> <span>Active</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserAccountInfoTab;
