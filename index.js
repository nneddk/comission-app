const express = require('express');
const mongoose = require('mongoose');
const routes = require('./server/routes/routes');
const cors = require ('cors');
require('dotenv').config();
const app = express();

app.use(cors());
app.use(express.json());
app.use('/api', routes)

const mongoString = process.env.DATABASE_URL




mongoose.connect(mongoString);
const database = mongoose.connection;

database.on('error', (error) => {
    console.log(mongoString);
    console.log(error);
})

database.once('connected', () => {
    console.log('Database Connected');
})

app.listen(8000, () => {
    console.log(`Server Started at ${8000}`);
})