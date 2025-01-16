const mongoose = require('mongoose')

const StudentLikeSchema = new mongoose.Schema({
    studentid: { 
        type: mongoose.Schema.Types.ObjectId, 
        ref: 'student', 
       
    },
    bookid: 
    { type: mongoose.Schema.Types.ObjectId, 
        ref: 'book', 
     },
   
});

module.exports = mongoose.model('StudentLike', StudentLikeSchema);