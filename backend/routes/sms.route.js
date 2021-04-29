const express = require("express");
const router = express.Router();
const controller = require('../controllers/sms')

router.post("/sendSMS",controller.sendSMS);
router.post("/verifySMS" , controller.verifiedSMS)

module.exports = router;
