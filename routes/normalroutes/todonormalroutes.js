"use strict";
let express=require("express");
let router=express.Router();
let todocontrollers=require("../../controllers/normalcontrollers/todonormalroutes");
let authenticate=require("../../middlewares/authenticate");

router.get("/todos",authenticate,todocontrollers.renderTodosPage);
router.get("/todo/create",authenticate,todocontrollers.renderTodoCreatePage);
router.get("/todo/update/:todoId",authenticate,todocontrollers.renderUpdateTodoPage);

module.exports=router;