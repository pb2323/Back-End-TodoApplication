"use strict";
let mongoose=require("mongoose");
let User=require("./Users");
let Schema=mongoose.Schema;

let todoschema=new Schema({
    title:{type:String,trim:true,required:true},
    body:{type:String,trim:true,required:true},
    isCompleted:{type:Boolean,default:false},
    user:{
        type:Schema.Types.ObjectId,
        ref:"user"
    }
},{timestamps:true});

let Todo=mongoose.model("todo",todoschema);
module.exports=Todo;