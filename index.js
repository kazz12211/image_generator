const express = require('express');
const config = require('dotenv').config();
const path = require('path')
const port = process.env.PORT || 3000;

const app = express();

app.use(express.json());
app.use(express.urlencoded( { extended: false } ));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/openai', require('./routes/openaiRoutes'));

app.listen (port, () => console.log(`Server started on port ${port}`));
