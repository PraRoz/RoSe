import express from "express";
import {
  addCategory,
  deleteCategory,
  editCategory,
  getAllCategory,
  getCategoryById,
} from "../controller/categoteController.js";
import uploadRouter from "../controller/uploadController.js";
import verifyToken from "../middleware/auth.js";
const router = express.Router();

router.get("/getAllCategory", getAllCategory);
router.post("/addCategory", addCategory);
router.delete("/:id", deleteCategory);
router.get("/:id", getCategoryById);
router.put("/:id", editCategory);
router.use("/upload", uploadRouter);

export default router;
