"use strict";
let Todo=require("../../models/Todos");

module.exports={
    createTodo:function(req,res){
        var user = req.user;
        console.log(req.body);
    var todo = new Todo({ ...req.body });
    todo.user = user._id;
    user.todos.push(todo._id);
    user.save()
    .then(function(user){
        console.log("Todo added successfully");
    })
    .catch(function(err){
        console.log(err);
        return res.status(500).send("Server error");
    });
        todo.save()
        .then(function(user){
            console.log("Todo saved successfully");
            return res.redirect("/todos");
        })
        .catch(function(err){
            console.log(err);
            return res.status(500).send("Server error");
        });
    },
    updateTodoById:function(req,res){
        let todoId=req.params.todoId;
        var isCompleted = req.body.isCompleted === "on";
        Todo.updateOne({_id:todoId},{...req.body,isCompleted:isCompleted},{new:true})
        .then(function(todo){
            if(!todo)
            return res.status(404).send("Todo not found");
            return res.redirect("/todos");

        })
        .catch(function(err){
            console.log(err);
            return res.status(500).send("Server error");
        });
},
    deleteTodoById:function(req,res){
        let todoId=req.params.todoId;
        let userId=req.user.id;
        Todo.deleteOne({_id:todoId,user:userId})
       .then(function(message){
           if(!message)
           return res.status(401).send("Todo not found");
           console.log("Todo deleted successfully");
          return res.redirect("/todos");
       })
       .catch(function(err){
           console.log(err);
           return res.status(500).send("Server error");
       });
    }
}