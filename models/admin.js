const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var adminSchema = new Schema({
    uid: { type: String, required: true, unique: true},
    firstName: { type: String, required: true},
    email: { type: String, required: true, unique: true, match: [/.+@.+\..+/, "Please enter a valid e-mail address"]},
    lastName: { type: String, required: true },
    telephone: { type: String, required: false},
    admin: {type: Boolean, required: true, default: true}
}, {
    timestamps: {
        createdAt: 'created_at'
    }});

const Admin = mongoose.model("Admin", adminSchema);

module.exports = Admin;