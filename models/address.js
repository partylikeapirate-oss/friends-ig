const mongoose = require("mongoose");
var Schema = mongoose.Schema;

var addressSchema = new Schema({
    RecordNumber: {type: Number, required: false},
    Zipcode: {type: Number, required: false},
    ZipCodeType: {type: String, required: false},
    City: {type: String, required: false},
    State: {type: String, required: false},
    LocationType: {type: String, required: false},
    Lat: {type: Number, required: false},
    Long: {type: Number, required: false},
    Xaxis: {type: Number},
    Yaxis: {type: Number},
    Zaxis: {type: Number},
    WorldRegion: {type: String},
    Country: {type: String},
    LocationText: {type: String},
    Location: {type: String},
    Decommissioned: {type: String},
    TaxReturnsFiled: {type: String},
    EstimatedPopulation: {type: String},
    TotalWages: {type: String},
    Notes: {type: String}
}, {
    timestamps: {
        createdAt: 'created_at'
    }});

const Quote = mongoose.model("Address", addressSchema);

module.exports = Quote;