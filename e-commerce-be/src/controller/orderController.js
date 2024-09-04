import { request, response } from "express";
import Order from "../model/order.js";
import Product from "../model/product.js";

export const addOrder = async (request, response) => {
  try {
    const order = request.body;
    const newOrder = await new Order(order).save();
    const id = newOrder._id.toString();
    response.json({
      status: 201,
      message: "Order Created Sucessfully",
      data: newOrder,
      orderId: id,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getAllOrder = async (request, response) => {
  try {
    const order = await Order.find({}).populate("user_id");
    response.json({
      status: 200,
      message: "Order fetched Sucessfully",
      data: order.reverse(),
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getOneOderById = async (request, response) => {
  try {
    const order = await Order.findById(request.params.id).populate("user_id");
    // .populate("product_id");
    const { _id, firstName, lastName, userName, email } = order.user_id;
    const productArray = order.products;
    const product = await Product.find({}).populate("category_id");
    const productsDetails = product.filter((prod) => {
      const newId = prod._id.toString();
      return productArray.find((items) => {
        const id = items.product_id;
        return newId == id;
      });
    });

    const orderWithAllData = {
      id: order._id,
      receiver: order.receiver,
      user: {
        id: _id,
        firstName: firstName,
        lastName: lastName,
        userName: userName,
        email: email,
      },
      product: productsDetails,
      status: order.status,
    };
    response.json({
      status: 201,
      message: "order fetch sucessfully",
      data: orderWithAllData,
    });
  } catch (error) {
    response.json({ status: 500, message: "Internal Server error" });
  }
};

export const getOneOderByIdV2 = async (request, response) => {
  try {
    const order = await Order.findById(request.params.id)
      .populate("user_id")
      .populate({
        path: "products",
        populate: {
          path: "product_id",
        },
      });

    response.json({
      status: 201,
      message: "order fetch sucessfully",
      data: order,
    });
  } catch (error) {}
};
