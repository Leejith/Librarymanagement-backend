var express=require('express')
var route=express.Router()
const controller=require("./collection/Student_collection")
const staff_controller=require("./collection/staff_collection")
const book_controller=require("./collection/book_collection")

route.post("/savestudent",controller.upload,controller.savestudent)
route.post("/loginstudent",controller.LoginStudent)
route.get("/studentlist",controller.StudentList)
route.get("/studentprofile/:id",controller.Studentprofile)


route.post("/savestaff",staff_controller.upload,staff_controller.savestaff)
route.post("/stafflogin",staff_controller.staff_login)
route.get("/stafflist",staff_controller.stafflist)

route.post("/savebook",book_controller.upload,book_controller.savebook)
route.get("/booklist",book_controller.booklist)
route.get("/viewbook/:id",book_controller.viewbook)
route.post("/removebook/:id",book_controller.removebook)



module.exports=route