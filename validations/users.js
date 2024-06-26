// Yup validation schema
import * as yup from "yup";
const userValidationSchema = yup.object().shape({
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
