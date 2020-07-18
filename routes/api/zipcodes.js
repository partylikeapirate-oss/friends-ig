const router = require("express").Router();
const zipcodesController = require("../../controllers/zipcodesController");

router.route("/find/:zip")
    .get(zipcodesController.findAll)


module.exports = router;