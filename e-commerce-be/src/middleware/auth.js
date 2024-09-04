import { request, response } from "express";
import jwt from "jsonwebtoken";

const verifyToken = (request, response, next) =>{
  let authHeader = request.headers.authorization;
  if(!authHeader){
    let error = new Error("Bearer token is not set")
    error.status = 401;
    return next(error)
 ;
  }
  let token = authHeader.split(" ")[1]
  try {
    const decoded = jwt.verify(token, process.env.SECRET);
    request.user = decoded;
  } catch (error) {
    return response.json({status:401, message:"Invalid Token"})
  }
  return next();
}

export default verifyToken;