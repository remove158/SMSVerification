import { useEffect, useState, useCallback } from "react";
import firebase from "./firebase/config";
import axios from "axios";

function App() {
	const [state, setstate] = useState({
		sessionInfo: "",
		phoneNumber: "",
		code: "",
	});

	window.myCallback = useCallback(
		async (recaptchaToken) => {
			const url = "http://localhost:3001/sendSMS"; // <- put your endpoint here
			const phoneNumber = "+66" + state.phoneNumber.substring(1);
			console.log(phoneNumber, recaptchaToken);
			try {
				const response = await axios.post(url, {
					phoneNumber,
					recaptchaToken,
				});
				// handle if send sucess
				alert("Sended");
				setstate({ ...state, sessionInfo: response.data.sessionInfo });
			} catch (err) {
				// handle if send faile
				alert("Error to send !");
				console.error(err.response.data.message);
			}
		},
		[state]
	);

	useEffect(() => {
		window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier(
			"sendCode",
			{
				size: "invisible",
				callback: (recaptchaToken) => window.myCallback(recaptchaToken),

				"expired-callback": () => {
					// Response expired. Ask user to solve reCAPTCHA again.
				},
			}
		);

		// render the rapchaVerifier.
		window.recaptchaVerifier.render().then(function (widgetId) {
			window.recaptchaWidgetId = widgetId;
		});
	}, []);

	const verifycode = async () => {
		try {
			const url = "http://localhost:3001/verifySMS"; // <- put your endpoint here
			const result = await axios.post(url, {
				verificationCode: state.code,
				sessionInfo: state.sessionInfo,
			});
			//handle if code is valid
			alert(`verify success token : ${result.data.accessToken}`);
		} catch (err) {
			//handle if code is invalid
			alert(err);
		}
	};
	return (
		<div className="App">
			<div className="send-sms-form">
				<input
					type="text"
					label="phonenumber"
					value={state.phonNumber}
					onChange={(e) =>
						setstate({ ...state, phoneNumber: e.target.value })
					}
				></input>
				<button id="sendCode">Send SMS</button>
			</div>
			<div className="Verify CODE">
				<input
					type="text"
					label="phonenumber"
					value={state.code}
					onChange={(e) =>
						setstate({ ...state, code: e.target.value })
					}
				></input>
				<button id="verify" onClick={verifycode}>
					Verify
				</button>
			</div>

			<pre>{JSON.stringify(state, null, 2)}</pre>
		</div>
	);
}

export default App;
