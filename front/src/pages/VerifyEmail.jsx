import { Mail } from "lucide-react";
import React from "react";

const VerifyEmail = () => {
  return (
    <div>
      <section className="bg-base-100">
        <div className="container flex items-center min-h-screen px-6 py-12 mx-auto">
          <div className="flex flex-col items-center max-w-sm mx-auto text-center">
            <p className="p-3 text-sm font-medium text-primary rounded-full bg-primary-content border-2 border-base-200">
              <Mail />
            </p>
            <h1 className="mt-3 text-2xl font-semibold md:text-3xl">
              Verify your Email
            </h1>
            <p className="mt-4 opacity-65">
              We have sent a verification link to your email address. Please
              check your inbox and follow the instructions to verify your
              account.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default VerifyEmail;
