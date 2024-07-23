<<<<<<< HEAD
import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button2 from "./../(components)/Button2";
import * as Yup from "yup";
=======
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import Button2 from "../(components)/Button2";

import Logo from "../(components)/Logo";
import { useNavigate } from "react-router-dom";
>>>>>>> 20f5fb39525efa98938907e9cf6dfda30c876a4b

const Login = () => {
  const navigate = useNavigate();
  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });
  const [loading, setLoading] = useState();
  const [error, setError] = useState();
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues((prevValues) => ({
      ...prevValues,
      [name]: value,
    }));
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      const response = await fetch("http://localhost:3000/api/user/login/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValues),
      });
      console.log(response);

      const data = await response.json();
      if (response.status === 401) {
        toast.error("Password is incorrect");
      }
      if (!response.ok) throw new Error(data.message || "Login failed");

      // Save the token to local storage or context
      localStorage.setItem("authToken", data.token);
      navigate("/discover");

      // Redirect or handle successful login
      console.log("Login successful:", data);
      toast.success(`Welcome, ${data.findUser.fname} ${data.findUser.lname}`);
      // Example: window.location.href = "/dashboard";
    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };
  return (
<<<<<<< HEAD
    <Formik
      initialValues={{ email: "", password: "" }}
      validationSchema={Yup.object({
        email: Yup.string().email("Invalid email address").required("Required"),
        password: Yup.string().required("Required"),
      })}
      onSubmit={(values) => {
        console.log(values);
      }}
    >
      {(formik) => (
        <form
          onSubmit={formik.handleSubmit}
          className="flex flex-col  gap-5 items-center shadow-lg w-[50%] justify-center m-auto mt-[250px]"
        >
          <div>
            <TextField
              id="outlined-basic"
              label="email"
              variant="outlined"
              {...formik.getFieldProps("email")}
            />
          </div>
          <div>
            <TextField
              id="outlined-basic"
              label="password"
              variant="outlined"
              {...formik.getFieldProps("password")}
            />
          </div>
          <Button2 type="submit" name="Login" />
        </form>
      )}
    </Formik>
=======
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="mb-4">
            <Logo className="mb-4" />
          </div>
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <form className="space-y-4 md:space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label
                    htmlFor="email"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Your email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    value={formValues.email}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required
                  />
                </div>
                <div>
                  <label
                    htmlFor="password"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    value={formValues.password}
                    onChange={handleChange}
                    className="bg-gray-50 border border-gray-300 text-gray-900 rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required
                  />
                </div>

                <Button2 name="Login Up" click={handleSubmit} />
                <div className="flex items-center justify-between">
                  <a
                    href="#"
                    className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Forgot password?
                  </a>
                </div>
                <div className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?
                  <a
                    href="#"
                    className="font-medium text-primary-600 hover:underline dark:text-primary-500"
                  >
                    Sign up
                  </a>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>
      ;
      <Toaster />
    </div>
>>>>>>> 20f5fb39525efa98938907e9cf6dfda30c876a4b
  );
};
export default Login;
