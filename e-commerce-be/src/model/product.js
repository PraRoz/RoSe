import mongoose from "mongoose";
import category from "./category.js";

const ProductSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      require: true,
    },
    intro: {
      type: String,
      require: true,
    },
    description: {
      type: String,
      require: true,
    },
    photo: {
      type: String,
      require: true,
    },
    price: {
      type: String,
      require: true,
    },
    discount: {
      type: String,
    },
    category_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: category,
      require: true,
    },
  },
  { timestamps: true }
);

const product = mongoose.model("Product", ProductSchema);

export default product;
