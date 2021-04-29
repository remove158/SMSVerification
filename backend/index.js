const express = require('express')
const app  = express();
const smsRoute = require('./routes/sms.route')
app.use("/" , smsRoute );

app.listen(3001 , ()=> {
    console.log(`Server listenning on port 3001 !`);
})