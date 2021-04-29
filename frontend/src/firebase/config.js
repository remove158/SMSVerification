import firebase from "firebase/app";
import "firebase/auth";

const firebaseConfig = {
	apiKey: "AIzaSyC870pTyPSl5zudd2DGAynbCi-uPpl7Y8E",
	authDomain: "piyaphatsite.firebaseapp.com",
	projectId: "piyaphatsite",
	storageBucket: "piyaphatsite.appspot.com",
	messagingSenderId: "523947946410",
	appId: "1:523947946410:web:0dcf266edfe97e3f5f7bd3",
	measurementId: "G-6E5J85TGY6",
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
