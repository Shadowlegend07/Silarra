const mongoose = require("mongoose");

const blogsSchema = mongoose.Schema({
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    title: {
        type: String,
        required: true,
    },
    content: {
        type: Number,
        required: true,
    },
    category: {
        type: [String],
        required: true,
    },
    comments_on_blog: {
        type: [String],
    },
});

module.exports = mongoose.model("Reimburse", reimburseSchema);