const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var quoteSchema = new Schema({
    firstName: { type: String, required: true},
    lastName: { type: String, required: true},
    dob: { type: String, required: true},
    street: { type: String, required: true},
    city: { type: String, required: true},
    state: { type: String, required: true},
    zip: { type: String, required: true},
    email: { type: String, required: true},
    vehicles: { type: String, required: false},
    drivers: { type: String, required: false},
    notes: {type: String, required: false},
    homeowner: {type: String, required: true},
    phone: {type: String, required: false},
    group: {type: Boolean, required: true, default: false},
    groupCode: {type: String, required: false},
    savings: {type: Number, required: false},
    quoteCarrier: { type: String, required: false},
    quoteAutoPremium: { type: Number, required: false},
    quoteHomePremium: { type: Number, required: false},
    quoteUmbrellaPremium: { type: Number, required: false},
    mcNotes: { type: String, required: false},
    mcStatus: { type: String, required: false},
    mainAgent: { type: String, required: true, default: "notTagged"},
    uploadedLink: { type: String, required: false},
    active: { type: Boolean, required: true, default: true},
    quoted: { type: Boolean, required: true, default: false},
    presented: { type: Boolean, required: true, default: false},
    sold: { type: Boolean, required: true, default: false}
}, {
    timestamps: {
        createdAt: 'created_at'
    }});

const Quote = mongoose.model("Quote", quoteSchema);

module.exports = Quote;