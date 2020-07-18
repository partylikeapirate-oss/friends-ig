const router = require("express").Router();

const zipcodeRoutes = require("./zipcodes");

// Book routes


router.use("/zipcodes", zipcodeRoutes);



module.exports = router;