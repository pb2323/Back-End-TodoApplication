module.exports={
    renderLoginPage:function(req,res){
        res.render("login",{
            title:"Login Page"
        })
    },

    renderRegisterPage:function(req,res){
        res.render("register",{
            title:"Register Page"
        })
    }
}