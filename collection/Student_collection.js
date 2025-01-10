var Student = require("../model/Student_schema");
var multer = require("multer");

const storage = multer.diskStorage({
  destination: function (req, res, cb) {
    cb(null, "./upload");
  },
  filename: function (req, file, cb) {
    cb(null, file.originalname);
  },
});
const upload = multer({ storage: storage }).single("file");

const savestudent = (req, res) => {
  console.log(req.body);
  console.log(res.body);

  let data = new Student({
    name: req.body.name,
    department: req.body.department,
    regno: req.body.regno,
    email: req.body.email,
    password: req.body.password,
    image: req.file,
  });
  console.log(data);
  data
    .save()
    .then((result) => {
      res.status(200).json({
        msg: "registered successfully",
        status: 200,
        data: result,
      });
    })
    .catch((err) => {
      res.status(500).json({
        msg: "failed",
        status: 500,
      });
    });
};

const LoginStudent =async (req, res) => {
  const { email } = req.body;
  const { password } = req.body;

  const student =await Student.findOne({ email });
  if (!student) {
    res.status(400).json({
      msg: "incorrect email",
      status: 400,
    });
  } else {
    if (student.password != password) {
      res.status(400).json({
        msg: "incorrect password",
      });
    } else {
      res.status(200).json({
        msg: "login successfully",
        data: student,
      });
    }
  }
};

const Studentprofile=async(req,res)=>{
  const {id}=req.params
  await Student.findById(id)
  .then((result)=>{
      res.status(200).json({
          msg:"sucess",
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
const StudentList=(req,res)=>{
    Student.find()
    .then((result)=>{
        res.status(200).json({
            msg:"sucess",
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

const studentUpate=(req,res)=>{
    const {id}=req.params
    const {name,department,password,image}=req.body
    Student.findByIdAndUpdate(id,{name})
}
module.exports = { savestudent, upload, LoginStudent,Studentprofile,StudentList };
