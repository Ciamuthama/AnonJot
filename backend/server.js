require('dotenv').config;

const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const notesRouter = require('./routes/routes.js')
const cors = require('cors') 


const app = express();
const port = process.env.PORT || 3000;
const dbURL = process.env.CONNECT_DB;
mongoose.connect(dbURL)
.then((result) => {
    app.listen(port)
    console.log('connected to database')
    console.log("connected to server 3000")
}).catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use(cors()) 
app.use(morgan('dev'));




app.get('/', (req,res)=>{
     res.render('/notes').json('hello');
 });

app.use('/notes', notesRouter)
