"use client";
import { useState } from "react";
import {
  Save,
  RefreshCw,
  Shield,
  Globe,
  BellRing,
  Activity,
  Mail,
} from "lucide-react";

export default function SettingsPage() {
  const [generalSettings, setGeneralSettings] = useState({
    siteName: "HypeCoding",
    siteDescription:
      "The ultimate platform for mastering coding challenges and acing technical interviews.",
    contactEmail: "support@hypecoding.com",
    logoUrl: "/logo.png",
    faviconUrl: "/favicon.ico",
    maintenanceMode: false,
    allowRegistrations: true,
    maxUsersPerPage: 50,
    defaultUserRole: "user",
  });

  const [emailSettings, setEmailSettings] = useState({
    smtpHost: "smtp.example.com",
    smtpPort: 587,
    smtpUser: "notifications@hypecoding.com",
    smtpPassword: "••••••••••••",
    senderName: "HypeCoding Team",
    senderEmail: "notifications@hypecoding.com",
    enableWelcomeEmail: true,
    enablePasswordResetEmail: true,
    enableActivityNotifications: true,
  });

  const [problemSettings, setProblemsSettings] = useState({
    defaultPageSize: 20,
    allowComments: true,
    allowSolutions: true,
    requireVerificationForSolutions: true,
    allowRatings: true,
    difficultyLevels: ["Easy", "Medium", "Hard"],
    defaultTimeLimit: 1000, // ms
    defaultMemoryLimit: 256, // MB
    languagesSupported: [
      "JavaScript",
      "Python",
      "Java",
      "C++",
      "C#",
      "Ruby",
      "Go",
    ],
  });

  const handleGeneralSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setGeneralSettings({
      ...generalSettings,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const handleEmailSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setEmailSettings({
      ...emailSettings,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number.parseInt(value)
          : value,
    });
  };

  const handleProblemSettingsChange = (e) => {
    const { name, value, type, checked } = e.target;
    setProblemsSettings({
      ...problemSettings,
      [name]:
        type === "checkbox"
          ? checked
          : type === "number"
          ? Number.parseInt(value)
          : value,
    });
  };

  const handleSaveSettings = (type) => {
    // This would save the settings to your backend
    console.log(`Saving ${type} settings...`);
    setTimeout(() => {
      alert(`${type} settings saved successfully!`);
    }, 500);
  };

  return (
    <div class="p-4 sm:ml-64">
      <div class="p-4 rounded-lg">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Platform Settings</h1>
          <p className="text-base-content opacity-70">
            Configure and customize your HypeCoding platform settings.
          </p>
        </div>

        <div className="tabs tabs-boxed bg-base-200 mb-8">
          <a className="tab tab-active">General</a>
          <a className="tab">Email</a>
          <a className="tab">Problems</a>
          <a className="tab">Security</a>
          <a className="tab">API</a>
          <a className="tab">Billing</a>
        </div>

        {/* General Settings */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Globe size={20} />
              General Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Site Name</span>
                </label>
                <input
                  type="text"
                  name="siteName"
                  value={generalSettings.siteName}
                  onChange={handleGeneralSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Contact Email</span>
                </label>
                <input
                  type="email"
                  name="contactEmail"
                  value={generalSettings.contactEmail}
                  onChange={handleGeneralSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">Site Description</span>
                </label>
                <textarea
                  name="siteDescription"
                  value={generalSettings.siteDescription}
                  onChange={handleGeneralSettingsChange}
                  className="textarea textarea-bordered w-full"
                  rows="2"
                ></textarea>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Logo URL</span>
                </label>
                <input
                  type="text"
                  name="logoUrl"
                  value={generalSettings.logoUrl}
                  onChange={handleGeneralSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Favicon URL</span>
                </label>
                <input
                  type="text"
                  name="faviconUrl"
                  value={generalSettings.faviconUrl}
                  onChange={handleGeneralSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Maintenance Mode</span>
                  <input
                    type="checkbox"
                    name="maintenanceMode"
                    checked={generalSettings.maintenanceMode}
                    onChange={handleGeneralSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Allow New Registrations</span>
                  <input
                    type="checkbox"
                    name="allowRegistrations"
                    checked={generalSettings.allowRegistrations}
                    onChange={handleGeneralSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Max Users Per Page</span>
                </label>
                <input
                  type="number"
                  name="maxUsersPerPage"
                  value={generalSettings.maxUsersPerPage}
                  onChange={handleGeneralSettingsChange}
                  className="input input-bordered w-full"
                  min="10"
                  max="100"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Default User Role</span>
                </label>
                <select
                  name="defaultUserRole"
                  value={generalSettings.defaultUserRole}
                  onChange={handleGeneralSettingsChange}
                  className="select select-bordered w-full"
                >
                  <option value="user">User</option>
                  <option value="moderator">Moderator</option>
                  <option value="admin">Admin</option>
                </select>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button
                className="btn btn-outline gap-2"
                onClick={() =>
                  setGeneralSettings({
                    siteName: "HypeCoding",
                    siteDescription:
                      "The ultimate platform for mastering coding challenges and acing technical interviews.",
                    contactEmail: "support@hypecoding.com",
                    logoUrl: "/logo.png",
                    faviconUrl: "/favicon.ico",
                    maintenanceMode: false,
                    allowRegistrations: true,
                    maxUsersPerPage: 50,
                    defaultUserRole: "user",
                  })
                }
              >
                <RefreshCw size={16} />
                Reset to Default
              </button>
              <button
                className="btn btn-primary gap-2"
                onClick={() => handleSaveSettings("general")}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Email Settings */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Mail size={20} />
              Email Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">SMTP Host</span>
                </label>
                <input
                  type="text"
                  name="smtpHost"
                  value={emailSettings.smtpHost}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">SMTP Port</span>
                </label>
                <input
                  type="number"
                  name="smtpPort"
                  value={emailSettings.smtpPort}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">SMTP Username</span>
                </label>
                <input
                  type="text"
                  name="smtpUser"
                  value={emailSettings.smtpUser}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">SMTP Password</span>
                </label>
                <input
                  type="password"
                  name="smtpPassword"
                  value={emailSettings.smtpPassword}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Sender Name</span>
                </label>
                <input
                  type="text"
                  name="senderName"
                  value={emailSettings.senderName}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Sender Email</span>
                </label>
                <input
                  type="email"
                  name="senderEmail"
                  value={emailSettings.senderEmail}
                  onChange={handleEmailSettingsChange}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="divider col-span-full">Email Notifications</div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Enable Welcome Emails</span>
                  <input
                    type="checkbox"
                    name="enableWelcomeEmail"
                    checked={emailSettings.enableWelcomeEmail}
                    onChange={handleEmailSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Enable Password Reset Emails
                  </span>
                  <input
                    type="checkbox"
                    name="enablePasswordResetEmail"
                    checked={emailSettings.enablePasswordResetEmail}
                    onChange={handleEmailSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Enable Activity Notifications
                  </span>
                  <input
                    type="checkbox"
                    name="enableActivityNotifications"
                    checked={emailSettings.enableActivityNotifications}
                    onChange={handleEmailSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button
                className="btn btn-outline gap-2"
                onClick={() => {
                  /* This would send a test email */
                  alert("Test email sent!");
                }}
              >
                <BellRing size={16} />
                Send Test Email
              </button>
              <button
                className="btn btn-primary gap-2"
                onClick={() => handleSaveSettings("email")}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Problem Settings */}
        <div className="card bg-base-100 shadow-lg mb-8">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Activity size={20} />
              Problem Settings
            </h2>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Default Page Size</span>
                </label>
                <input
                  type="number"
                  name="defaultPageSize"
                  value={problemSettings.defaultPageSize}
                  onChange={handleProblemSettingsChange}
                  className="input input-bordered w-full"
                  min="10"
                  max="100"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Default Time Limit (ms)</span>
                </label>
                <input
                  type="number"
                  name="defaultTimeLimit"
                  value={problemSettings.defaultTimeLimit}
                  onChange={handleProblemSettingsChange}
                  className="input input-bordered w-full"
                  min="100"
                  max="10000"
                />
              </div>

              <div className="form-control w-full">
                <label className="label">
                  <span className="label-text">Default Memory Limit (MB)</span>
                </label>
                <input
                  type="number"
                  name="defaultMemoryLimit"
                  value={problemSettings.defaultMemoryLimit}
                  onChange={handleProblemSettingsChange}
                  className="input input-bordered w-full"
                  min="16"
                  max="1024"
                />
              </div>

              <div className="form-control w-full md:col-span-2">
                <label className="label">
                  <span className="label-text">
                    Supported Languages (comma-separated)
                  </span>
                </label>
                <input
                  type="text"
                  name="languagesSupported"
                  value={problemSettings.languagesSupported.join(", ")}
                  onChange={(e) => {
                    setProblemsSettings({
                      ...problemSettings,
                      languagesSupported: e.target.value
                        .split(",")
                        .map((lang) => lang.trim())
                        .filter((lang) => lang),
                    });
                  }}
                  className="input input-bordered w-full"
                />
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Allow Comments</span>
                  <input
                    type="checkbox"
                    name="allowComments"
                    checked={problemSettings.allowComments}
                    onChange={handleProblemSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Allow Solutions</span>
                  <input
                    type="checkbox"
                    name="allowSolutions"
                    checked={problemSettings.allowSolutions}
                    onChange={handleProblemSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">
                    Require Verification for Solutions
                  </span>
                  <input
                    type="checkbox"
                    name="requireVerificationForSolutions"
                    checked={problemSettings.requireVerificationForSolutions}
                    onChange={handleProblemSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>

              <div className="form-control">
                <label className="label cursor-pointer">
                  <span className="label-text">Allow Ratings</span>
                  <input
                    type="checkbox"
                    name="allowRatings"
                    checked={problemSettings.allowRatings}
                    onChange={handleProblemSettingsChange}
                    className="toggle toggle-primary"
                  />
                </label>
              </div>
            </div>

            <div className="card-actions justify-end mt-6">
              <button
                className="btn btn-primary gap-2"
                onClick={() => handleSaveSettings("problem")}
              >
                <Save size={16} />
                Save Changes
              </button>
            </div>
          </div>
        </div>

        {/* Security Settings */}
        <div className="card bg-base-100 shadow-lg">
          <div className="card-body">
            <h2 className="card-title flex items-center gap-2">
              <Shield size={20} />
              Security Settings
            </h2>

            <div className="alert alert-info mt-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                className="stroke-current shrink-0 w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                ></path>
              </svg>
              <span>
                Security settings are available in the full version. Please
                contact support for more information.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
