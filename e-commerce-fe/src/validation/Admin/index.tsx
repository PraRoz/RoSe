import { z } from "zod";

export const productSchema = z.object({

  name: z
    .string({ invalid_type_error: "Product name is required" })
    .nonempty({ message: "Product name is required" })
    .trim()
    .min(2, { message: "Product should be atleast 2 characters" }),

  intro: z
    .string({ invalid_type_error: "Intro is required" })
    .nonempty({ message: "Intro name is required" })
    .trim()
    .min(2, { message: "Inrro should be atleast 2 characters" }),

  description: z
    .string({ invalid_type_error: "Description is required" })
    .nonempty({ message: "Description is required" })
    .trim()
    .min(2, { message: "Description should be atleast 2 characters" }),

  discount: z.string({ invalid_type_error: "Must be string" }).nullable(),

  category_id: z
    .string({ invalid_type_error: "Catrgory is required" })
    .nonempty({ message: "Catrgory is required" })
    .trim()
    .min(2, { message: "Catrgory should be atleast 2 characters" }),

  price: z
    .string({ invalid_type_error: "Price is required" })
    .nonempty({ message: "Price is required" })
    .trim(),

  photo: z.string({ invalid_type_error: "Photo is required" }).nonempty({message:"Photo is required"}),
});


export const categorySchema = z.object({

  title: z.string({ invalid_type_error: "Title is required" })
  .nonempty({ message: "Title is required" })
  .trim()
  .min(2, { message: "Title should be atleast 2 characters" }),

  description: z
  .string({ invalid_type_error: "Description is required" })
  .nonempty({ message: "Description is required" })
  .trim()
  .min(2, { message: "Description should be atleast 2 characters" }),

  
})
