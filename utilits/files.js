"use strict";
let fs=require("fs");
module.exports={
    readfilepromise:function(filepath){
        return new Promise(function(resolve,reject){
            fs.readFile(filepath,{encoding:"utf-8"},function(err,res){
                if(err)
                reject(err);
                else
                resolve(res);
            })
        });
    },
    writefilepromise:function(filepath,data){
        return new Promise(function(resolve,reject){
            fs.writeFile(filepath,data,function(err){
                if(err)
                reject(err);
                else
                resolve("Writing done successful");
            })
           
        })
    }
}