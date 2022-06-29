require('dotenv').config('.env');
const express = require('express');
const cors = require('cors');
const { dbConnect } = require('./config/mysql');

const app = express();
app.use(cors());

app.use('/users', require('./routes/Users'));

app.listen(process.env.PORT || 3000, () => {
    console.log('*** SERVER RUNNING ***');
    console.log(`http://localhost/${process.env.PORT}`);
})

dbConnect();