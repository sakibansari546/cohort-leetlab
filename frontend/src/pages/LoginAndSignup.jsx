import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";

import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import { Key, Mail, User, UserRoundSearchIcon } from "lucide-react";

import Input from "../components/Input";

import { signupSchema, loginSchema } from "../utils/zod-schema";
import { handleSignupAndLogin } from "../store/actions/auth";

const LoginAndSignup = ({ type }) => {
  const isSignupPage = type === "signup";
  const dispatch = useDispatch();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(isSignupPage ? signupSchema : loginSchema),
  });

  console.log(errors);
  const onSubmit = async (data) => {
    dispatch(handleSignupAndLogin(data, type));
  };
  return (
    <>
      <div>
        <div className="flex items-center w-full min-h-screen">
          <div className="bg-base-100 w-full lg:w-[50%] min-h-screen">
            <div className="">
              <div className="flex items-center flex-col gap-5 w-full justify-center h-screen">
                <div className="w-[50%]">
                  <div>
                    <h1 className="font-bold text-3xl text-center mb-5">
                      {isSignupPage ? "Signup" : "Login"}
                    </h1>
                  </div>
                  <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                    {isSignupPage && (
                      <div>
                        <Input
                          {...register("fullname")}
                          icon={<User />}
                          label="Fullname"
                          type="text"
                          placeholder="Fullname"
                        />
                      </div>
                    )}
                    <div>
                      <Input
                        {...register("email")}
                        icon={<Mail />}
                        label="Email"
                        type="email"
                        placeholder="Email"
                      />
                    </div>
                    <div>
                      <Input
                        {...register("password")}
                        icon={<Key />}
                        label="Password"
                        type="password"
                        placeholder="Password"
                      />
                    </div>
                    {errors && (
                      <div>
                        <p className="text-red-500 w-[80%]">
                          {errors.fullname
                            ? errors.fullname?.message
                            : errors.email
                            ? errors.email?.message
                            : errors.password?.message}
                        </p>
                      </div>
                    )}
                    <div className="float-right underline font-light">
                      <Link to="/forgot-password">Forgot Password</Link>
                    </div>

                    <div className="">
                      <button className="btn btn-secondary w-full">
                        Submit
                      </button>
                    </div>
                  </form>
                  <div className="divider font- text-base-content/70">
                    Or Continue with
                  </div>
                  <div className="my-3 flex items-center justify-center gap-7">
                    <div>
                      <button className="border-1 p-1.5 border-base-300 rounded-full cursor-pointer">
                        {" "}
                        <svg
                          aria-label="Google logo"
                          width="30"
                          height="30"
                          className="rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path
                              fill="#34a853"
                              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                            ></path>
                            <path
                              fill="#4285f4"
                              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                            ></path>
                            <path
                              fill="#fbbc02"
                              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                            ></path>
                            <path
                              fill="#ea4335"
                              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="border-1 p-1.5 border-base-300 rounded-full cursor-pointer">
                        {" "}
                        <svg
                          aria-label="GitHub logo"
                          width="30"
                          height="30"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                        >
                          <path
                            fill="white"
                            d="M12,2A10,10 0 0,0 2,12C2,16.42 4.87,20.17 8.84,21.5C9.34,21.58 9.5,21.27 9.5,21C9.5,20.77 9.5,20.14 9.5,19.31C6.73,19.91 6.14,17.97 6.14,17.97C5.68,16.81 5.03,16.5 5.03,16.5C4.12,15.88 5.1,15.9 5.1,15.9C6.1,15.97 6.63,16.93 6.63,16.93C7.5,18.45 8.97,18 9.54,17.76C9.63,17.11 9.89,16.67 10.17,16.42C7.95,16.17 5.62,15.31 5.62,11.5C5.62,10.39 6,9.5 6.65,8.79C6.55,8.54 6.2,7.5 6.75,6.15C6.75,6.15 7.59,5.88 9.5,7.17C10.29,6.95 11.15,6.84 12,6.84C12.85,6.84 13.71,6.95 14.5,7.17C16.41,5.88 17.25,6.15 17.25,6.15C17.8,7.5 17.45,8.54 17.35,8.79C18,9.5 18.38,10.39 18.38,11.5C18.38,15.32 16.04,16.16 13.81,16.41C14.17,16.72 14.5,17.33 14.5,18.26C14.5,19.6 14.5,20.68 14.5,21C14.5,21.27 14.66,21.59 15.17,21.5C19.14,20.16 22,16.42 22,12A10,10 0 0,0 12,2Z"
                          ></path>
                        </svg>
                      </button>
                    </div>
                    <div>
                      <button className="border-1 p-1.5 border-base-300 rounded-full cursor-pointer">
                        {" "}
                        <svg
                          aria-label="Google logo"
                          width="30"
                          height="30"
                          className="rounded-full"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 512 512"
                        >
                          <g>
                            <path d="m0 0H512V512H0" fill="#fff"></path>
                            <path
                              fill="#34a853"
                              d="M153 292c30 82 118 95 171 60h62v48A192 192 0 0190 341"
                            ></path>
                            <path
                              fill="#4285f4"
                              d="m386 400a140 175 0 0053-179H260v74h102q-7 37-38 57"
                            ></path>
                            <path
                              fill="#fbbc02"
                              d="m90 341a208 200 0 010-171l63 49q-12 37 0 73"
                            ></path>
                            <path
                              fill="#ea4335"
                              d="m153 219c22-69 116-109 179-50l55-54c-78-75-230-72-297 55"
                            ></path>
                          </g>
                        </svg>
                      </button>
                    </div>
                  </div>

                  <div className="text-center font-sans">
                    {isSignupPage ? (
                      <p>
                        Already have an account?{" "}
                        <Link to="/login" className="underline font-light">
                          Login
                        </Link>
                      </p>
                    ) : (
                      <p>
                        Don't have an account?{" "}
                        <Link to="/signup" className="underline font-light">
                          Signup
                        </Link>
                      </p>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-base-300 w-[50%] min-h-screen hidden lg:flex items-center justify-center">
            <p className="text-xl font-light">Welcome to our platform!</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default LoginAndSignup;
