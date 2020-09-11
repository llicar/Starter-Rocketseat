const express = require('express');
const mongoose = require('mongoose');
const requireDir = require("require-dir");
const cors = require("cors");

mongoose.connect('mongodb://localhost:27017/nodeapi',{
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

requireDir("src/models");

const app = express();
app.use(express.json());
app.use(cors());

//rotas
app.use('/api', require('./src/routes'))

app.listen(3001);