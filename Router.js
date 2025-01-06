var express=require('express')
var route=express.Router()
const controller=require("./collection/Student_collection")
const staff_controller=require("./collection/staff_collection")

route.post("/savestudent",controller.upload,controller.savestudent)


route.post("/savestaff",staff_controller.upload,staff_controller.savestaff)

module.exports=route