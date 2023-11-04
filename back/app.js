const express = require('express')
const database = require('./src/config/database')
const app = express()


const PORT = process.env.PORT || 3001

app.listen(PORT,()=>{
    console.log(`Server is running on port ${PORT}`)
})