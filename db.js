"use strict";
let mongoose=require("mongoose");
mongoose.connect(process.env.myUrl.replace("<password>",process.env.myPassword),{
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology:true
})
.then(function(){
    console.log("Database connected successfully");
})
.catch(function(err){
    console.log("1234");
    console.log(err);
});