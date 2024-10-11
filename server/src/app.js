const express = require('express')
const cors=require('cors')
require('dotenv').config()
const todoRoutes=require('./routes/routes')
const app = express()
const port = process.env.PORT || 4000;
app.use(cors())
app.use(express.json());

app.use('/todo',todoRoutes)

app.listen(port,()=>{
    console.log(`server started on port ${port}`)
})