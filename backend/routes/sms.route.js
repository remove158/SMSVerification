const express = require("express");
const router = express.Router();
const controller = require('../controllers/sms')

//-------------------------------------------------------------------------//
// TODO : export sms routes  
//-------------------------------------------------------------------------//

router.post("/sendSMS",controller.sendSMS);
router.post("/verifySMS" , controller.verifiedSMS)

module.exports = router;
