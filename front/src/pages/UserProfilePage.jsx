import React, { useRef, useState } from "react";
import {
  Camera,
  Github,
  Globe,
  Info,
  Laptop2,
  Linkedin,
  Loader2,
  Twitter,
  Wrench,
} from "lucide-react";

import UserBasicInfoTab from "../components/UserBasicInfoTab";
import UserAccountInfoTab from "../components/UserAccountInfoTab";

import {
  useGetUserQuery,
  useUpdateUserProfileImageMutation,
} from "../querys/useUserQuery";

const UserProfilePage = () => {
  const fileInputRef = useRef();
  const [activeTab, steActiveTab] = useState("basic-info");
  const { data, isPending, isError, error } = useGetUserQuery();
  const user = data?.user;

  const {
    mutateAsync,
    isPending: updateIsPending,
    isError: updateIsError,
    error: updateError,
  } = useUpdateUserProfileImageMutation();

  const handleClick = () => {
    fileInputRef.current.click();
  };

  const handleChange = async (e) => {
    const profileImage = e.target.files[0];
    const formData = new FormData();
    formData.append("profileImage", profileImage);

    await mutateAsync(formData);
  };

  if (isPending) {
    return (
      <div className="w-full flex items-center flex-col justify-center h-[70vh]">
        <span className="loading loading-bars loading-xl"></span>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="w-full flex items-center flex-col justify-center h-[70vh]">
        <h3 className="text-2xl font-bold">{error?.response?.data?.message}</h3>
      </div>
    );
  }

  const RenderTabContent = () => {
    switch (activeTab) {
      case "basic-info":
        return <UserBasicInfoTab />;
      case "account-info":
        return <UserAccountInfoTab />;
    }
  };

  return (
    <div className="">
      <div className="w-[60%] mx-auto bg-base-00 min-h-screen space-y-6 py-6">
        <div className="p-8 bg-base-200">
          <div className="flex items-center gap-15 justify-center w-[40vw] mx-auto">
            <div>
              <div className="relative">
                <img
                  className={`w-50 h-50 object-cover rounded-full ${
                    updateIsPending && "animate-pulse"
                  }`}
                  src={user?.profileImage}
                  alt=""
                />
                <input
                  onChange={handleChange}
                  type="file"
                  hidden
                  ref={fileInputRef}
                />
                <button
                  disabled={updateIsPending}
                  onClick={handleClick}
                  className="btn btn-lg btn-circle btn-accent absolute bottom-[5%] right-2"
                >
                  {updateIsPending ? (
                    <span className="loading-spinner loading"></span>
                  ) : (
                    <Camera />
                  )}
                </button>
              </div>
              {updateIsError && (
                <p className="text-error mt-4">
                  {updateError?.response?.data?.message}
                </p>
              )}
            </div>

            <div className="space-y-1.5">
              <h2 className="text-2xl font-extrabold">{user?.fullname}</h2>
              <h3 className="text-xl font-semibold">
                @{user?.username || "@username"}
              </h3>
              <p className="text-sm text-base-content/80">
                {user?.basicInfo?.bio || "bio."}
              </p>
              <div className="flex items-center gap-4 pt-3">
                <a
                  target="_blank"
                  href={user?.basicInfo?.socials?.website || ""}
                >
                <Globe />
                </a>
                <a
                  target="_blank"
                  href={user?.basicInfo?.socials?.github || ""}
                >
                  <Github />
                </a>
                <a
                  target="_blank"
                  href={user?.basicInfo?.socials?.twitter || ""}
                >
                  <Twitter />
                </a>
                <a
                  target="_blank"
                  href={user?.basicInfo?.socials?.linkedIn || ""}
                >
                  <Linkedin />
                </a>
              </div>
            </div>
          </div>
        </div>
        <div className="bg-base-200 w-full p-8">
          <div>
            <div>
              <div>
                {/* name of each tab group should be unique */}
                <div className="tabs tabs-lift">
                  <label className="tab flex items-center gap-2">
                    <input
                      type="radio"
                      name="my_tabs_4"
                      // checked={activeTab === "basic-info"}
                      defaultChecked
                      onChange={() => steActiveTab("basic-info")}
                    />
                    <Info size="18" />
                    Basic Information
                  </label>

                  <label className="tab flex items-center gap-2">
                    <input
                      type="radio"
                      name="my_tabs_4"
                      onChange={() => steActiveTab("account-info")}
                    />
                    <Wrench size="18" />
                    Account
                  </label>
                </div>
                <RenderTabContent />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UserProfilePage;
