const { google } = require("googleapis");
`   `
//-------------------------------------------------------------------------//
// TODO : verify code with "verificationCode": "string", "sessionInfo": "string" 
//-------------------------------------------------------------------------//

const verifySMS  = async(req,res,next)=>{
    const { verificationCode, sessionInfo } = req.body;
	if (!verificationCode || !sessionInfo)
		return next({
			status: 400,
			message: "Not found verificationCode or sessionInfo !",
		});
        
        
	try {
        //put your API Token in env 
		const identityToolkit = google.identitytoolkit({
			auth: process.env.APIkey,  // <- here is API token 
			version: "v3",
		});
		const { data } = await identityToolkit.relyingparty.verifyPhoneNumber({
            code: verificationCode,
			sessionInfo: sessionInfo,
		});
        
		const accessToken = await generateJWT(data.phoneNumber);
		return res.json({ accessToken });
	} catch (err) {
		return next(err, req, res);
	}
}

const generateJWT = async (phoneNumber) => {
	const payload = {
		exp: new Date().getTime() / 1000 + 60 * 60,
		sub: { phoneNumber: phoneNumber },
		iat: new Date().getTime(),
	};
	return JWT.sign(payload, process.env.JWTSecret);
};


module.exports = verifySMS