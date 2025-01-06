var mongoose=require("mongoose")

var Student_schema = new mongoose.Schema({
    name:{
        type:String,
        require:true
    },
    department:{
        type:String,
        require:true
    },
    regno:{
        type:Number,
        require:true
    },
    email:{
        type:String,
        require:true
    },
    password:{
        type:String,
        require:true
    },
    image:{
        type:Object
    }
})

module.exports = new mongoose.model("student",Student_schema)