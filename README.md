
Form validation

Complete React Form Validation using Formik & Yup in Hindi\
https://www.youtube.com/watch?v=0S-pyTJ2ZvU&t=980s

--------------------------------------------------------------------------------
code available insie react > react-form-validation

>> create project
>> Install formik and yup
	> npm i formik yup
>> import formik
	> import { useFormik } from 'formik';

>> Define initialValues must be same as form name element
	> const initialValues = {
    name:'',
    email:'',
    pswd:'',
    cpswd:''
}

>> Create formik funtion
	> const { values , errors , touched, handleBlur , handleChange,handleSubmit } = useFormik({
		initialValues:initialValues,
		onSubmit : (values) => {
			console.warn(values)
		}
	})
	console.warn(Formik)

>> add values name , onChange={handleChange}, onBlur={handleBlur} inside input
	> <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Enter name"
              name="name"
              value={values.name}
              onChange={handleChange}
              onBlur={handleBlur}
            />

>> Add on onSubmit funtion in form
	> <form onSubmit={handleSubmit}>
	
>> Create schema 

	> import * as yup from 'yup';

	export  const SignupSchema = yup.object({
		name:yup.string().min(2).max(20).required("Please enter your name"),
		email:yup.string().email().required("Please enter your email"),
		pswd:yup.string().min(6).required("Please enter your password"),
		cpswd:yup.string().required("Please enter confirm password").oneOf([yup.ref("pswd"),null],"password must match"),
	});
	
>> export SignupSchema  
	> import { SignupSchema } from "../schema";

>> Fetch schema inside formik function after initialValues
	> validationSchema:SignupSchema,
	
>> add error code in p tag after input field
	> { errors.email && touched.email ? ( <p> {errors.email} </p> ) :null }
	
>> to clear form after submition create action parameters and use in onsubmit
	> onSubmit : (values,action) => {
			console.warn(values)
			action.resetForm()
		}

--------------------------------------------------------------------------------
