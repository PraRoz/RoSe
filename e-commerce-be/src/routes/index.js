import express from "express";
import categoryRoute from "./category.route.js";
import productRoute from "./product.route.js";
import uploadRouter from "./fileUpload.router.js";
import userRouter from "./user.route.js";
import orderRouter from "./order.route.js"
const router = express.Router();

const defaultRoutes = [
    {
        path:"/category",
        route: categoryRoute,
    },
    {
        path:"/product",
        route: productRoute,
    },
    
    {
        path:"/upload",
        route: uploadRouter,
    },
    {
        path:"/user",
        route: userRouter,
    },
    {
        path:"/order",
        route: orderRouter,
    }
]

defaultRoutes.forEach((route) =>{
    router.use(route.path,route.route )
});

export default router;