const mongoose = require("mongoose");

const suggestionSchema = mongoose.Schema({
    employeeid: {
        type: mongoose.Schema.Types.ObjectId,
    },
    suggestions: {
        type: String,
        required: true,
    },
    //Upload File is Optional in this
    //that implementation remaining
});

module.exports = mongoose.model("Suggestion", suggestionSchema);