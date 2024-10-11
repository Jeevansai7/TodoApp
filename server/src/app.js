const express = require('express')
const cors=require('cors')
require('dotenv').config()
const todoRoutes=require('./routes/routes')
const app = express()

app.use(cors())
app.use(express.json());

app.use('/todo',todoRoutes)

app.listen(3001,()=>{
    console.log("server started on port 3001")
})