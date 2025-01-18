const StudentCart = require("../model/StudentCartSchema");

const AddCart = (req, res) => {
    const { studentid, bookid } = req.params;

    StudentCart.findOne({ studentid, bookid })
        .then((existingCartItem) => {
            if (existingCartItem) {
                return res.status(400).json({
                    msg: "Book already added to cart",
                    status: 400,
                });
            }

            let data = new StudentCart({
                studentid,
                bookid,
                status: true,
            });

            data
                .save()
                .then((result) => {
                    res.status(200).json({
                        msg: "Added to cart successfully",
                        status: 200,
                        data: result,
                    });
                })
                .catch((err) => {
                    res.status(500).json({
                        msg: "Failed to add to cart",
                        status: 500,
                        error: err.message,
                    });
                });
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Error checking cart",
                status: 500,
                error: err.message,
            });
        });
};

const getCart = async(req, res) => {
    
    const {studentid} = req.params
    console.log({studentid});
    await StudentCart.find({studentid})
        .populate('bookid')
        .then((result) => {
            
            res.status(200).json({
                msg: "cart fetched successfully",
                status: 200,
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                msg: "cart to fetch favorites",
                status: 500,
            });
        });
}


const removeCart = (req, res) => {
    const { studentid, bookid } = req.params;

    StudentCart.findOneAndDelete({ studentid, bookid })
        .then((result) => {
            if (!result) {
                return res.status(400).json({
                    msg: "Book not found in cart",
                    status: 400,
                });
            }
            res.status(200).json({
                msg: "Removed from cart successfully",
                status: 200,
                data: result,
            });
        })
        .catch((err) => {
            res.status(500).json({
                msg: "Failed to remove from cart",
                status: 500,
                error: err.message,
            });
        });
};



module.exports = {AddCart ,getCart ,removeCart}