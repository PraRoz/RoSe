import express from "express";
import dotenv from "dotenv";
import bodyParser from "body-parser";
import cors from "cors";
import mongoose from "mongoose";
import router from "./src/routes/index.js";
import cloudinary from "cloudinary";

const app = express();

dotenv.config();

app.use(bodyParser.json({ extended: true }));
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());
// app.use(express.static(__dirname + "/public/upload"));

app.use("/", router);

const url = process.env.MONGODB_URI;
// const url = "mongodb://localhost:27017/e-commerce-be";

const PORT = 5000;

mongoose.set("strictQuery", false);
mongoose
  .connect(url)//{useUnifiedTopology: true,    useNewUrlParser: true,  }
  .then((res) => {
    console.log("db Connected");
  })
  .catch((error) => {
    console.log(error, "here");
  });
app.listen(PORT, () => console.log(`server is running on port ${PORT}`));
