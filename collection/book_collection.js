var Book=require("../model/book_schema")
var multer = require("multer")

const storage = multer.diskStorage({
    destination:function(req,res,cb){
        cb(null,"./upload")
    },
    filename:function(req,file,cb){
        cb(null,file.originalname)
    }
})
const upload=multer({storage:storage}).single("file")

const savebook=(req,res)=>{
    let data = new Book({
        booktitle : req.body.booktitle,
        authorname : req.body.authorname,
        genre : req.body.genre,
        description : req.body.description,
        date : req.body.date,
        image : req.file

    })
    data.save()
    .then((result)=>{
        res.status(200).json({
            msg : "Added successfully",
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


module.exports={savebook,upload}