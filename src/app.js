const express = require('express')
const authRouter = require('./routers/authentication')
const port = process.env.PORT
require('./db/db.js') // connects to the database
require("./bitcoin_api") //  loads the old btc wallets to use them 

const app = express()

app.use(express.json())
app.use(authRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})  