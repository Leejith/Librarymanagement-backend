var Student=require("../model/Student_schema")
var multer=require("multer")

const storage=multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"./upload")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})

const savestudent=(req,res)=>{
    let data = new Student({
        name : req.body.name,
        department : req.body.department,
        regno : req.body.regno,
        email : req.body.email,
        password : req.body.password,
        image : null
    })
    data.save()
    .then((result)=>{
        res.status(200).json({
            msg : "registered successfully",
            status: 200,
            data : result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            msg : "failed",
            status:500
        })
    })
}


module.exports={savestudent}