var Staff=require("../model/staff_schema")
var multer=require("multer")

const storage=multer.diskStorage({
    destination:function (req,res,cb){
        cb(null,"./upload")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    },
})
const upload=multer({storage:storage}).single("file")


const savestaff=async(req,res)=>{
    console.log(req.body)
    console.log(req.file)
    let data = new Staff({
        name : req.body.name,
        department : req.body.department,
        regno : req.body.regno,
        email : req.body.email,
        password : req.body.password,
        image : req.file
    })
    await data.save()
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


module.exports={savestaff,upload}