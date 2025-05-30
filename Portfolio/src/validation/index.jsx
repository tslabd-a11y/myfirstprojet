import * as yup from "yup";

export const contactMeScema = yup
  .object({
    name: yup
      .string()
      .required("The Full Name is required")
      .min(5, "You must insert 5 lenght at least"),
    email: yup
      .string()
      .required("Email is required")
      .matches(/^[^@ ]+@[^@ ]+\.[^@.]{2,}$/, "Invalid Email"),
    userMessage: yup
      .string()
      .required("Meesage is required")
      .min(20, "U should have at least 20 carateres"),
  })
  .required();
