const express = require('express')
const connectDB=require('./config/connectDB')

const user =require('./routes/user')

const app = express()

app.use(express.json())
connectDB();

app.use('/user',user)  
 


const PORT = process.env.PORT || 5000
app.listen(PORT, err => err ? console.log('server error', err)
    : console.log(`server running on port ${PORT}`));