// Yup validation schema
import * as yup from "yup";
const userValidationSchema = yup.object().shape({
  username: yup
    .string()
    .trim()
    .min(3, "Username must be at least 3 characters")
    .max(20, "Username must be at most 20 characters")
    .required("Username is required"),
  email: yup
    .string()
    .trim()
    .lowercase()
    .email("Invalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password must be at least 8 characters")
    .required("Password is required"),
});
export default userValidationSchema;
