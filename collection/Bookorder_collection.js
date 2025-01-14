var Stafforder = require("../model/Bookorder_schema")

const orderlist=async (req,res)=>{
    console.log(req.body)
    let data = new Stafforder({
       teacherid: req.body.teacherid,
       bookid: req.body.bookid 
    })
    await data.save()
    .then((result)=>{
        res.status(200).json({
            msg:"Requested",
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

module.exports = {orderlist}