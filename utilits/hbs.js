var hbs=require("hbs");
hbs.registerHelper("constructUpdate",function(){
    return `/todo/update/${this.id}`;
})
hbs.registerHelper("constructDelete",function(){
    return `/todo/delete/${this.id}`;
});
hbs.registerHelper("constructUpdateAPI",function(){
    return `/todo/update/${this.todo.id}`;
});