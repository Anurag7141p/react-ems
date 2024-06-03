import * as Yup from "yup";

export const addUserSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .min(2, "First Name should be at least 2 characters")
    .max(30, "First Name should not exceed 30 characters"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name should be at least 2 characters")
    .max(10, "Last Name should not exceed 10 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  avatar: Yup.mixed().required("Please upload an image file"),
});


export const editUserSchema = Yup.object({
  first_name: Yup.string()
    .required("First Name is required")
    .min(2, "First Name should be at least 2 characters")
    .max(30, "First Name should not exceed 30 characters"),
  last_name: Yup.string()
    .required("Last Name is required")
    .min(2, "Last Name should be at least 2 characters")
    .max(10, "Last Name should not exceed 10 characters"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  avatar: Yup.mixed().required("Please upload an image file"),
});
