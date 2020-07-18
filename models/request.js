const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var requestSchema = new Schema({
    projName: { type: String, required: true},
    projDesc: { type: String, required: true},
    reqName: { type: String, required: true},
    reqEmail: { type: String, required: false},
    reqPhone: { type: String, required: true},
    reqBudget: { type: Number, requred: true},
    projNotes: { type: String, required: false},
    completed: { type: Boolean, required: true, default: false},
    active: { type: Boolean, required: true, default: true}
}, {
    timestamps: {
        createdAt: 'created_at'
    }});

const Request = mongoose.model("Request", requestSchema);

module.exports = Request;