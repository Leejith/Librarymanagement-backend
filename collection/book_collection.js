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

const booklist=(req,res)=>{
    Book.find()
    .then((result)=>{
        res.status(200).json({
            msg:"success",
            status:200,
            data:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            msg:"failed",
            status:500
        })
    })
}


const viewbook=async(req,res)=>{
    const {id} = req.params
    await Book.findById(id)
    .then((result)=>{
        res.status(200).json({
            msg:"viewed successfully",
            status:200,
            data:result
        })
    })
    .catch((err)=>{
        res.status(500).json({
            msg:"failed",
            status:500
        })
    })
}


const removebook=(req,res)=>{
    const {id} = req.params
    Book.findByIdAndDelete(id)
    .then((result)=>{
        res.status(200).json({
            msg:"deleted successfully",
            status:200
        })
    })
    .catch((err)=>{
        res.status(500).json({
            msg:"failed",
            status:500
        })
    })
}




module.exports={savebook,upload,booklist,viewBook,removebook}


