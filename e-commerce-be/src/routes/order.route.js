import express from "express";
import {
  addOrder,
  getAllOrder,
  getOneOderById,
  getOneOderByIdV2,
} from "../controller/orderController.js";

const router = express.Router();

router.post("/addOrder", addOrder);
router.get("/getAllOrder", getAllOrder);
router.get("/:id", getOneOderByIdV2);

export default router;
