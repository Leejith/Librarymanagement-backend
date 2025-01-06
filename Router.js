var express=require('express')
var route=express.Router()
const controller=require("./collection/Student_collection")
const staff_controller=require("./collection/staff_collection")
const book_controller=require("./collection/book_collection")

route.post("/savestudent",controller.upload,controller.savestudent)
route.post("/loginstudent",controller.LoginStudent)


route.post("/savestaff",staff_controller.upload,staff_controller.savestaff)
route.post("/stafflogin",staff_controller.staff_login)

route.post("/savebook",book_controller.upload,book_controller.savebook)
module.exports=route