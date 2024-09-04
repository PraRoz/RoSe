import { request, response } from "express";
import Product from "../model/product.js";

export const addProduct = async (request, response) => {
  try {
    const product = request.body;
    const newProduct = await new Product(product).save();
    response.json({
      status: 201,
      message: "Product Created Sucessfully",
      data: newProduct,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getAllProduct = async (request, response) => {
  console.log(request);
  try {
    const product = await Product.find({}).populate("category_id");
    response.json({
      status: 200,
      message: "Product fetched Sucessfully",
      data: product,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getProductById = async (request, response) => {
  try {
    const product = await Product.findById(request.params.id).populate(
      "category_id"
    );
    response.json({
      status: 200,
      message: "Product fetched Sucessfully",
      data: product,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const deleteProduct = async (request, response) => {
  try {
    await Product.findByIdAndRemove(request.params.id);
    response.json({ status: 201, message: "Product  deleted sucessfully" });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getProductByCategory = async (request, response) => {
  try {
    const categoryId = request.params.id;
    const allProduct = await Product.find({}).populate("category_id");
    const filterProduct = allProduct
      .filter((product) => {
        return product.category_id.id === categoryId;
      })
      .slice(0, 10);
    response.json({
      status: 200,
      message: "Product fetched Sucessfully",
      data: filterProduct,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};
