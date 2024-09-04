import express from "express";
import multer from "multer";
import { v2 as cloudinary } from "cloudinary";
import path from "path";


const storage = multer.diskStorage({
  filename: (req, file, callback) => {
    let ext = path.extname(file.originalname);
    callback(null, `${file.fieldname}-${Date.now()}${ext}`);
  },
});

cloudinary.config({
  cloud_name: process.env.CLOUDE_NAME,
  api_key: process.env.API_KEY,
  api_secret: process.env.API_SECRET,
});

const imageFileFilter = (req, file, cb) => {
  if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
    return cb(new Error("You can upload only image files!"), false);
  }
  cb(null, true);
};

const uploader = multer({
  storage: storage,
  fileFilter: imageFileFilter,
});

const uploadRouter = express.Router();

uploadRouter
  .route("/")

  .post(uploader.single("imageFile"), async (req, res) => {
    const options = {
      user_filename: true,
      unique_filename: true,
    };
    try {
      const file = (req?.file?.path);

      const data = await cloudinary.uploader.upload(file);
      res
        .status(200)
        .json({ data: data.url, message: "File uploded sucessfully" });
    } catch (error) {
      console.log(error, "file upload fail");
    }
  });

export default uploadRouter;
