const mongoose = require("mongoose");

const reimburseSchema = mongoose.Schema({
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