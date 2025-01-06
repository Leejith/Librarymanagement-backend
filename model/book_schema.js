var mongoose=require("mongoose")

var Book_schema = new mongoose.Schema({
    booktitle:{
        type:String,
        require:true
    },
    authorname:{
        type:String,
        require:true
    },
    genre:{
        type:String,
        require:true
    },
    description:{
        type:String,
        require:true
    },
    date:{
        type:String,
        require:true
    },
    image:{
        type:Object
    }
})

module.exports = new mongoose.model("book",Book_schema)