var Book=require("../model/book_schema")


const savebook=(req,res)=>{
    let data = new Book({
        name : req.body.name,
        authorname : req.body.department,
        category : req.body.regno,
        description : req.body.email,
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


module.exports={savestaff}