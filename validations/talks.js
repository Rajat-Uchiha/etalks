// Yup validation schema
import * as yup from "yup";
const talkvalidation = yup.object().shape({
  title: yup
    .string()
    .min(10, "title must be at least 10 characters")
    .required("talk title is required"),
  description: yup
    .string()
    .min(10, "description must be at least 10 characters")
    .required("talk description is required"),
});
export default talkvalidation;
