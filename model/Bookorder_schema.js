var mongoose = require("mongoose")

var Bookorder_schema = new mongoose.Schema({
    teacherid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"staff"
    },
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"staff"
    },
    bookstatus:{
        type:String,
        default:"pending",
        enum:["pending","unavailable"]
    }
})

module.exports = new mongoose.model("order",Bookorder_schema)