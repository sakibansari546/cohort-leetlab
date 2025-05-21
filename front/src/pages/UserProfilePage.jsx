import React, { useState } from "react";
import UserBasicInfoTab from "../components/UserBasicInfoTab";
import UserAccountInfoTab from "../components/UserAccountInfoTab";
import { Camera, Info, Wrench } from "lucide-react";

const UserProfilePage = () => {
  const [activeTab, steActiveTab] = useState("basic-info");

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
          <div className="flex items-center  gap- justify-around w-[50%] mx-auto">
            <div className="relative">
              <img
                className="w-50 h-50"
                src="https://avatar.iran.liara.run/public/girl"
                alt=""
              />
              <button className="btn btn-lg btn-circle btn-accent absolute bottom-[5%] right-2">
                <Camera />
              </button>
            </div>
            <div>
              <h2 className="text-3xl font-extrabold">Full Name</h2>
              <h3 className="text-xl font-semibold">@username</h3>
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
