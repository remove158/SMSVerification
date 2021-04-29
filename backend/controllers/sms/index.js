const sendSMS = require('./sendSMS.controller')
const verifiedSMS = require('./verifiedSMS.controller')

//-------------------------------------------------------------------------//
// TODO : Combine all sms controllers  
//-------------------------------------------------------------------------//

exports = module.exports = {sendSMS , verifiedSMS}