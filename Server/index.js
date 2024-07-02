const express = require('express')
const connecttomongo = require('./db')

connecttomongo();

const app = express();
const port = 5000;

// cors
const cors = require('cors')
app.use(cors())

app.use(express.json())

app.use('/api/auth',require('./routes/auth'))
app.use('/api/jobs',require('./routes/job'))

app.listen(port,() => {
    console.log(`connected to port localhost:${port}`)
})