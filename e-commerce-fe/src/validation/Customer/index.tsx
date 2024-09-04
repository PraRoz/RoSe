import { z } from "zod";

export const loginSchema = z.object({
  email: z
    .string({ invalid_type_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .trim()
    .email(),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(8, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    })
    .max(20, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    })
    .trim()
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,20}/, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    }),
});

export const registerSchema = z.object({
  firstName: z
    .string({ required_error: "First Name is required" })
    .regex(/^[a-zA-Z ]*$/, "First Name only accepts alphabets")
    .nonempty({ message: "First Name is required" })
    .trim()
    .min(2, { message: "First Name should be atleast 2 characters" }),
  lastName: z
    .string({ required_error: "Last Name is required" })
    .nonempty({ message: "Last Name is required" })
    .trim()
    .regex(/^[a-zA-Z ]*$/, "Last Name only accepts alphabets")
    .min(2, { message: "Last Name should be atleast 2 characters" }),
  userName: z
    .string({ required_error: "First Name is required" })
    .regex(/^[a-zA-Z ]*$/, "First Name only accepts alphabets")
    .nonempty({ message: "First Name is required" })
    .trim()
    .min(2, { message: "First Name should be atleast 2 characters" }),
  phone: z
    .string({ required_error: "Phone Number is required" })
    .nonempty({ message: "Phone Number is required" })
    .trim()
    .regex(/^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
      message: "Phone number is not valid",
    }),
  password: z
    .string({ required_error: "Password is required" })
    .nonempty({ message: "Password is required" })
    .min(8, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    })
    .max(20, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    })
    .trim()
    .regex(/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*#?&^_-]).{8,20}/, {
      message:
        "Password should be between 8-20 characters with atleast 1 symbol, 1 uppercase and 1 number",
    }),
  email: z
    .string({ required_error: "Email is required" })
    .nonempty({ message: "Email is required" })
    .email(),
  nickName: z.string().trim().optional(),
});


export const paymentSchema = z.object({
  name: z
    .string({ required_error: "First Name is required" })
    .regex(/^[a-zA-Z ]*$/, "First Name only accepts alphabets")
    .nonempty({ message: "First Name is required" })
    .trim()
    .min(2, { message: "First Name should be atleast 2 characters" }),

    phone: z
    .string({ required_error: "Phone Number is required" })
    .nonempty({ message: "Phone Number is required" })
    .trim()
    .regex(/^(\+?\d{1,3})?[\s.-]?\(?\d{3}\)?[\s.-]?\d{3}[\s.-]?\d{4}$/, {
      message: "Phone number is not valid",
    }),

    location: z
    .string({ required_error: "Location is required" })
    .nonempty({ message: "Location is required" })
    .trim()
    .min(2, { message: "Location should be atleast 2 characters" }),

    monument: z
    .string({ required_error: "Monument is required" })
    .nonempty({ message: "Monument is required" })
    .trim()
    .min(2, { message: "Monument should be atleast 2 characters" }),

    paymentMethod: z.string({invalid_type_error:"Payment Method is required"}).nonempty({message:"Payment Method is required"})
})



