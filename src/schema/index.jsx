import * as yup from 'yup';

export  const SignupSchema = yup.object({
    name:yup.string().min(2).max(20).required("Please enter your name"),
    email:yup.string().email().required("Please enter your email"),
    pswd:yup.string().min(6).required("Please enter your password"),
    cpswd:yup.string().required("Please enter confirm password").oneOf([yup.ref("pswd"),null],"password must match"),
});