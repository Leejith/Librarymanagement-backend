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
        idno : req.body.idno,
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

const staff_login = async (req,res)=>{
    const {email} = req.body
    const {password} = req.body
    const user = await Staff.findOne({email})

    if(!user){
        res.status(400).json({
            msg : "Email not found"
    })
}
    else{
        if(user.password != password){
            res.status(400).json({
                msg:"Incorrect password"
            })
        }
        else{
            res.status(200).json({
                msg:"Logged In Successfully",
                data:user
            })
        }
    }
}

const stafflist=(req,res)=>{
    Staff.find()
    .then((result)=>{
        res.status(200).json({
            msg:"success",
            data : result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            msg:"failed",
            status : 500
        })
    })
}


module.exports={savestaff,upload,staff_login,stafflist}