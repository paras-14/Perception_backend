const {Router}=require("express");
const express=require("express");
const route=express.Router();
const {UserController}=require("../controllers");

route.post("/create/user",UserController.createUser);
route.get("/get/user",UserController.getAllUser);
module.exports=route;
