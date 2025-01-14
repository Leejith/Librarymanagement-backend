var mongoose = require("mongoose")

var studentorder_schema = new mongoose.Schema({
    studentid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"student"
    },
    bookid:{
        type:mongoose.Schema.Types.ObjectId,
        required:true,
        ref:"student"
    },
    bookstatus:{
        type:String,
        default:"pending",
        enum:["pending","accepted","reject"]
    }
})

module.exports = new mongoose.model("orderr",studentorder_schema)