const controller_object = {};

controller_object.contoh_fungsi = async(req,res,next) => {
    res.status(200).json({
        status: "sukses"
    });
};

module.exports = controller_object;