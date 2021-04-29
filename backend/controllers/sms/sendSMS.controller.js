const { google } = require("googleapis");


//-------------------------------------------------------------------------//
// TODO : get "recaptchaToken": "string"  and send sms to user  
//-------------------------------------------------------------------------//

const sendSMS =  async (req,res,next) => {
	const { phoneNumber, recaptchaToken } = req.body;
    
	if (!phoneNumber || !recaptchaToken)
        // 
		return next({
			statusCode: 400,
			message: "Not found phonenumber or recaptchatoken !",
		});

	try {
        //put your API Token in env 
		const identityToolkit = google.identitytoolkit({
			auth: process.env.APIkey,  // <- here is API token 
			version: "v3",
		});
        //sending sms to user
		const response = await identityToolkit.relyingparty.sendVerificationCode(
			{
				phoneNumber,
				recaptchaToken,
			}
		);
        
		const sessionInfo = response.data.sessionInfo;
		return res.json({ sessionInfo });
	} catch (err) {
        //fail to send SMS 
		return next(err, req, res);
	}
}

module.exports = sendSMS