import React, { useState } from "react";
import { Alert, Button, notification } from "antd";
import registerImage from "../../../assets/Clothes/register.jpg";
import { Link, useNavigate } from "react-router-dom";
import { registerSchema } from "../../../validation/Customer";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod/dist/zod";
import { ErrorMessage } from "@hookform/error-message";
import { signUp } from "../../../api/Customer/index";
type ContactUsFormData = z.infer<typeof registerSchema>;

function RegisterPage() {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const {
    register,
    control,
    reset,
    handleSubmit,
    formState: { errors },
  } = useForm<ContactUsFormData>({
    resolver: zodResolver(registerSchema),
    mode: "onBlur", // "onChange"
  });
  const onSubmit = async (data: ContactUsFormData) => {
    const newUser = {
      ...data,
      role: "User",
    };
    const res = await signUp(newUser);
    if (res?.data?.status === 201) {
      notification.success({
        message: res?.data?.message,
      });
      navigate("/");
    } else {
      notification.error({
        message: "Registration Fail Please try again later !",
      });
    }
  };
  return (
    <section className="flex justify-center items-center p-10 bg-secondary">
      <div
        className="flex rounded-3xl overflow-hidden"
        style={{ boxShadow: "9px 13px 34px -13px rgba(110,82,199,0.75)" }}
      >
        <div className="max-w-lg min-w-[20rem] hidden sm:block">
          <img src={registerImage} alt="" className="object-cover h-full" />
        </div>
        <div className="login-form bg-light p-5 md:p-[2rem] w-[29rem] ">
          <div className="flex justify-center">
            <h1 className="text-primary px-2 py-3 font-semibold text-4xl md:text-5xl  text-center font-secondary">
              Welcome
            </h1>
          </div>

          <h1 className="text-3xl text-primary my-5">Create Account</h1>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div>
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="First Name"
                id="firstName"
                {...register("firstName")}
              />
              <ErrorMessage
                errors={errors}
                name="firstName"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="Last Name"
                id="lastName"
                {...register("lastName")}
              />
              <ErrorMessage
                errors={errors}
                name="lastName"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="User Name"
                id="userName"
                {...register("userName")}
              />
              <ErrorMessage
                errors={errors}
                name="userName"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-5">
              <input
                className="w-full text-lg text-primary py-3 border-b border-primary  focus:outline-none focus:border-indigo-500 placeholder:text-primary "
                type="text"
                placeholder="Phone Number"
                id="phone"
                {...register("phone")}
              />
              <ErrorMessage
                errors={errors}
                name="phone"
                render={({ message }) => (
                  <Alert
                    message={message}
                    type="error"
                    className="mt-1 text-center"
                  />
                )}
              />
            </div>
            <div className="mt-5">
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
            <div className="mt-5 relative">
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
                className="!px-10 !pb-11  !rounded-full !text-2xl "
              >
                Register
              </Button>
            </div>
          </form>

          <div className="mt-3 flex justify-center items-center">
            <Link to="/login">
              {" "}
              <span className="text-center text-sm text-primary cursor-pointer opacity-90 hover:opacity-100">
                Have Account?
              </span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default RegisterPage;
