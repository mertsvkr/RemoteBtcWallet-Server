const express = require('express')
const authRouter = require('./routers/authentication')
const port = process.env.PORT
require('./db/db.js')

const app = express()

app.use(express.json())
app.use(authRouter)

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})  