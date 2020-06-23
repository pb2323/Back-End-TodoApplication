"use strict";
let Todo=require("../../models/Todos");
module.exports={
    renderTodoCreatePage:function(req,res){
        res.render("todoCreate",{
            userId:req.user.Id,
            title:"Create todo"
        });
    },
    renderUpdateTodoPage:function(req,res){
        let parId=req.params.todoId;
        Todo.findOne({_id:parId,user:req.user._id})
        .then(function(user){
            return res.render("todoUpdate",{
                title:"Todo Update Page",
                todo:user,
                userId:req.user.id
            });
        })
        .catch(function(err){
            return res.status(500).send(`Server Error ${err.message}`);
        });
    },
    renderTodosPage:function(req,res){
        let user=req.user;
        Todo.find({user:req.user._id})
        .then(function(todos){
            return res.render("dashboard",{
                userId:user._id,
                name:user.name,
                todos:todos,
                length:todos.length
            });
        })
        .catch(function(err){
            return res.status(500).send(`Server error${err.message}`);
        });
    }
}