const express = require('express')
const app  = express();
const smsRoute = require('./routes/sms.route')
const errorHandle = require("./controllers/errorHandle");
const  cors = require('cors')

app.use(cors({ origin: true })) // to enable cors 
app.use(express.json()); // to enable body parse
//-------------------------------------------------------------------------//
// TODO : Handle all routes  
//-------------------------------------------------------------------------//
app.use("/" , smsRoute );
app.use(errorHandle)


app.listen(3001 , ()=> {
    console.log(`Server listenning on port 3001 !`);
})