const mongoose = require("mongoose");

const reimburseSchema = mongoose.Schema({
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    purpose: {
        type: String,
        required: true,
    },
    amount: {
        type: Number,
        required: true,
    },
});

module.exports = mongoose.model("Reimburse", reimburseSchema);