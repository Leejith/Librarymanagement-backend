var express=require('express')
var route=express.Router()
const controller=require("./collection/Student_collection")
const staff_controller=require("./collection/staff_collection")
const book_controller=require("./collection/book_collection")
const stafforder_controller=require("./collection/Bookorder_collection")
const studentorder_controller=require("./collection/studentorder_collection")
const ReviewController=require("./collection/ReviewCollection")
const StudentLikeController=require("./collection/StudentLikeCollection")
const StudentCartController=require("./collection/StudentCartCollection")

route.post("/savestudent",controller.upload,controller.savestudent)
route.post("/loginstudent",controller.LoginStudent)
route.get("/studentlist",controller.StudentList)
route.get("/studentprofile/:id",controller.Studentprofile)


route.post("/savestaff",staff_controller.upload,staff_controller.savestaff)
route.post("/stafflogin",staff_controller.staff_login)
route.get("/stafflist",staff_controller.stafflist)
route.get("/staffprofile/:id",staff_controller.Staffprofile)

route.post("/savebook",book_controller.upload,book_controller.savebook)
route.get("/booklist",book_controller.booklist)
route.get("/viewbook/:id",book_controller.viewbook)
route.post("/removebook/:id",book_controller.removebook)
route.get("/bookcount",book_controller.bookCount)
route.get("/similarbook/:genre",book_controller.similarBooks)
route.get("/latestbook",book_controller.latestBooks)
route.put("/bookstatus/:id",book_controller.Bookstatus)

route.post("/order",stafforder_controller.orderlist)
route.post("/orderr",studentorder_controller.orderlist)


route.post("/Savereview",ReviewController.savereview)
route.get("/reviewlist/:postid",ReviewController.reviewlist)

route.post("/addlike/:studentid/:bookid",StudentLikeController.AddLike)
route.get("/getlike/:studentid",StudentLikeController.getLike)
route.post("/removelike/:studentid/:bookid",StudentLikeController.removeLike)


route.post("/addcart/:studentid/:bookid",StudentCartController.AddCart)
route.post("/removecart/:studentid/:bookid",StudentCartController.removeCart)
route.get("/getcart/:studentid",StudentCartController.getCart)

module.exports=route