import React, { useState } from "react";
import { Alert, Button, notification } from "antd";
import { Link, useNavigate } from "react-router-dom";
import loginImage from "../../../assets/Clothes/login.jpg";
import { loginSchema } from "../../../validation/Customer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { signIn } from "../../../api/Customer/index";
import { toggleValue } from "../../../Redux/toggleAuth";
import { useDispatch } from "react-redux";
type ContactUsFormData = z.infer<typeof loginSchema>;
function LogInPage() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(loginSchema),
    mode: "onBlur", // "onChange"
  });

  const onSubmit = async (data: ContactUsFormData) => {
    const res = await signIn(data);
    if (res?.data?.status === 201) {
      notification.success({
        message: res?.data?.message,
      });
      const storagedata = {
        token: res?.data?.token,
        role: res?.data?.role,
      };
      if (res?.data?.role === "Admin") {
        sessionStorage.setItem("AdminAuth", JSON.stringify(storagedata));
        dispatch(toggleValue());
        navigate("/admin");
      } else {
        localStorage.setItem("token", res?.data?.token);
        navigate("/");
      }
    } else {
      notification.error({
        message: res?.data?.message,
      });
    }
  };
  return (
    <section className="flex justify-center items-center p-10 md:p-20  bg-secondary">
      <div
        className="flex rounded-3xl overflow-hidden"
        style={{ boxShadow: "9px 13px 34px -13px rgba(110,82,199,0.75)" }}
      >
        <div className="max-w-md min-w-[20rem] hidden sm:block">
          <img src={loginImage} alt="" className="object-cover h-full" />
        </div>
        <div className="login-form bg-light p-5 md:p-[3.5rem] w-[29rem]">
          <div className="flex justify-center">
            <h1 className="text-primary px-2  py-3 font-semibold text-4xl md:text-5xl  text-center font-secondary">
              Welcome
            </h1>
          </div>
          <h1 className="text-2xl md:text-3xl text-primary my-10">
            Login Your Account
          </h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="email"
                placeholder="Email"
                id="email"
                {...register("email")}
              />{" "}
              <ErrorMessage
                errors={errors}
                name="email"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-8 relative">
              {showPassword ? (
                <i
                  className="fa-solid fa-eye absolute text-primary top-5 right-10 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                ></i>
              ) : (
                <i
                  className="fa-solid fa-eye-slash absolute text-primary top-5 right-10 cursor-pointer"
                  onClick={() => setShowPassword((prev) => !prev)}
                ></i>
              )}

              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type={`${showPassword ? "text" : "password"}`}
                placeholder="Password"
                id="password"
                {...register("password")}
              />
              <ErrorMessage
                errors={errors}
                name="password"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-8 flex justify-center items-center">
              <Button
                type="primary"
                size="large"
                htmlType="submit"
                className="!px-10 !pb-11  !rounded-full !text-2xl"
              >
                Log In
              </Button>
            </div>
          </form>
          <div className="mt-4 flex justify-center items-center">
            <Link to="/register">
              <span className="text-center text-xl text-primary cursor-pointer opacity-90 hover:opacity-100">
                Create Account
              </span>
            </Link>
          </div>
          <div className="mt-8 flex justify-center items-center">
            <span className="text-center text-sm text-primary cursor-pointer opacity-90 hover:opacity-100">
              Forget Password?
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default LogInPage;
