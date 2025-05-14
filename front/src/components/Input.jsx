import { Eye, EyeOff } from "lucide-react";
import React, { useState } from "react";

const Input = ({ icon, type, ...props }) => {
  const [showPassword, setShowPassword] = useState(false);
  return (
    <>
      <div>
        <div className="flex flex-col w-full">
          <label className="input w-full">
            {icon}
            <input
              className="w-full"
              type={showPassword ? "text" : type}
              {...props}
            />
            {type === "password" && (
              <button
                type="button"
                className="cursor-pointer"
                onClick={() => setShowPassword((pre) => !pre)}
              >
                {showPassword ? <EyeOff /> : <Eye />}
              </button>
            )}
          </label>
        </div>
      </div>
    </>
  );
};

export default Input;
