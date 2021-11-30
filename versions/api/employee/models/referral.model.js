const mongoose = require("mongoose");

const referralSchema = mongoose.Schema({
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    referred_name: {
        type: String,
        required: true,
    },
    role: {
        type: String,
        required: true,
    },
});
//Upload Resume part remaining
module.exports = mongoose.model("Referral", referralSchema);