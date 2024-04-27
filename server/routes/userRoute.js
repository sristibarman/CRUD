const express = require("express");
const route = express.Router();
const { create,getAllUsers,getOne, updatedUser, deleteUser } = require("../controllers/userController.js");

route.post("/post", create);
route.get("/getall", getAllUsers);
route.get("/getone/:id" , getOne);
route.put("/update/:id",updatedUser);
route.delete("/delete/:id",deleteUser);


module.exports = route;