const mongoose = require("mongoose");

const leaveSchema = mongoose.Schema({
    leavetype: {
        type: String,
        required: true,
    },
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    leave_start_date: {
        type: String,
        required: true,
    },
    leave_end_date: {
        type: String,
        required: true,
    },
    reason_for_leave: {
        type: String,
        required: true,
    },
});

module.exports = mongoose.model("Leave", leaveSchema);