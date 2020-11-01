const mongoose = require('mongoose')

mongoose.connect(process.env.MONGODB_URL, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true
}, err => {
    if (err) {
        console.log("DATABASE CONNECTION FAILED: \n" + err)
    } else {
        console.log("Database connection is successful!")
    }
})