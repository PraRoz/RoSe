import mongoose from "mongoose";
import product from "./product.js";
import user from "./user.js";

const orderSchema = new mongoose.Schema(
  {
    user_id: {
      type: mongoose.Schema.Types.ObjectId,
      ref: user,
      require: true,
    },
    receiver: {
      receiver_name: {
        type: String,
        require: true,
      },
      receiver_contact: {
        type: String,
        require: true,
      },
      location: {
        type: String,
        require: true,
      },
      monument: {
        type: String,
        require: true,
      },
    },
    products: [
      {
        product_id: {
          type: mongoose.Schema.Types.ObjectId,
          ref: product,
          require: true,
        },
        size: {
          type: String,
          require: true,
        },
        quantity: {
          type: Number,
          require: true,
        },
      },
    ],
    status:{
      type: String,
    },
    paymentMethod:{
      type: String,
    }
  },
  { timestamps: true }
);

const order = mongoose.model("Order", orderSchema);

export default order;
