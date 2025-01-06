var express=require('express')
var route=express.Router()
const controller=require("./collection/Student_collection")

route.post("/savestudent",controller.savestudent)


module.exports=route