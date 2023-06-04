import React from "react";
import { useFormik } from 'formik';
import { SignupSchema } from "../schema";

const initialValues = {
    name:'',
    email:'',
    pswd:'',
    cpswd:''
}

const Signup = () => {

const { values , errors , touched , handleBlur , handleChange,handleSubmit } = useFormik({
    initialValues,
    validationSchema:SignupSchema,
    onSubmit : (values,action) => {
        console.warn(values)
        action.resetForm()
    }
})

  return (
    <div>
      <div className="container mt-3">
        <h2>Formik and yup</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-floating mb-3 mt-3">
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label >Name</label>
            { errors.name && touched.name ? ( <p> {errors.name} </p> ) :null }
          </div>
          <div className="form-floating mb-3 mt-3">
            <input
              type="email"
              className="form-control"
              id="email"
              placeholder="Enter email"
              name="email"
              value={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label >Email</label>
            { errors.email && touched.email ? ( <p> {errors.email} </p> ) :null }
          </div>
          <div className="form-floating mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              id="pswd"
              placeholder="Enter password"
              name="pswd"
              value={values.pswd}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label >Password</label>
            { errors.pswd && touched.pswd ? ( <p> {errors.pswd} </p> ) :null }
          </div>
          <div className="form-floating mt-3 mb-3">
            <input
              type="text"
              className="form-control"
              id="cpswd"
              placeholder="Enter confirm password"
              name="cpswd"
              value={values.cpswd}
              onChange={handleChange}
              onBlur={handleBlur}
            />
            <label >Confirm Password</label>
            { errors.cpswd && touched.cpswd ? ( <p> {errors.cpswd} </p> ) :null }
          </div>
          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Signup;
