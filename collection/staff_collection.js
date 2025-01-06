var Staff=require("../model/staff_schema")


const savestaff=async(req,res)=>{
    console.log(req.body)
    let data = new Staff({
        name : req.body.name,
        department : req.body.department,
        regno : req.body.regno,
        email : req.body.email,
        password : req.body.password,
        image : null
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


module.exports={savestaff}