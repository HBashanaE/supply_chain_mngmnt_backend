const express = require('express');
const db = require('./db')
const router = require('./routes');

const app = express();

// app.use(express.json());

app.use('/api/scms', router);

app .listen(process.env.PORT || '3000', () => {
    console.log(`Server is running on port: ${process.env.PORT || '3000'}`);
});