const express = require('express')
const app  = express();
const smsRoute = require('./routes/sms.route')
const errorHandle = require("./controllers/errorHandle");

//-------------------------------------------------------------------------//
// TODO : Handle all routes  
//-------------------------------------------------------------------------//
app.use("/" , smsRoute );
app.use(errorHandle)


app.listen(3001 , ()=> {
    console.log(`Server listenning on port 3001 !`);
})