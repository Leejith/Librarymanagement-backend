const mongoose = require('mongoose')

const StudentLikeSchema = new mongoose.Schema({
    studentid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'Student', 
       
    },
    bookid: 
    { type: mongoose.Schema.Types.ObjectId, 
        ref: 'Book', 
     },
   
});

module.exports = mongoose.model('StudentLike', StudentLikeSchema);