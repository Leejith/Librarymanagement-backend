var mongoose=require("mongoose")

var Book_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    authorname:{
        type:String,
        require:true
    },
    category:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    }
})

module.exports = new mongoose.model("book",Book_schema)