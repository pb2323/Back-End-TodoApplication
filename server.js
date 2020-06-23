"use strict";
let express=require("express");
let app=express();
let session=require("express-session");
let morgan=require("morgan");
app.use(morgan("dev"));
let hbs=require("hbs");
let path=require("path");
require("./db");
require("./utilits/hbs");
app.set("view engine","hbs");
app.set("views",path.join(__dirname,"views","pages"));
app.set("view options",{layout:"layout"});
hbs.registerPartials(path.join(__dirname,"views","partials"));
app.use(express.urlencoded({extended:false}));
app.use(session({
    secret:"itsmysecret",
    resave:false,
    saveUninitialized:false,
    cookie:{
        httpOnly:true,
        secure:false,
        sameSite:true,
        maxAge:1000*60*30
    },
    name:"todoSession"
}));
let userapiroutes=require("./routes/apispecificroutes/userroutes");
let todoapiroutes=require("./routes/apispecificroutes/todoroutes");
let usernormalroutes=require("./routes/normalroutes/usernormalroutes");
let todonormalroutes=require("./routes/normalroutes/todonormalroutes");
app.use(userapiroutes);
app.use(todoapiroutes);
app.use(usernormalroutes);
app.use(todonormalroutes);


app.get("/", function(req, res) {
  return res.render("index", {
    title: "Home page",
    userId: req.session.userId
  });
});  
app.listen(1234,function(){
    console.log("Server is listening");
});