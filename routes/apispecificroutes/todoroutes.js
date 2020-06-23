"use strict";
let express=require("express");
let router=express.Router();
let authenticate=require("../../middlewares/authenticate");
let todocontrollers=require("../../controllers/apispecificcontrollers/todoapicontrollers");

router.post("/todo/create",authenticate,todocontrollers.createTodo);
router.post("/todo/update/:todoId",authenticate,todocontrollers.updateTodoById);
router.post("/todo/delete/:todoId",authenticate,todocontrollers.deleteTodoById);

module.exports=router;