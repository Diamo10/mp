import React from "react";
import { Formik } from "formik";
import TextField from "@mui/material/TextField";
import Button2 from "./../(components)/Button2";
import * as Yup from "yup";

const Login = () => {
  return (
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
  );
};
export default Login;
