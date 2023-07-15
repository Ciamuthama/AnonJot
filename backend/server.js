require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const notesRouter = require('./routes/routes.js')
const cors = require('cors') 


const app = express();
const listener = app.listen( 3000, () => {
    console.log(`connected to server` + listener.address().port)

})
mongoose.connect(process.env.CONNECT_DB)
.then(() => {
    console.log('connected to database')
}).catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use(cors()) 
app.use(morgan('dev'));




app.get('/', (req,res)=>{
     res.render('/notes');
 });

// app.post('/new', (req,res)=>{
//     res.render('/new')
// });

// app.get('/note', (req,res)=>{
//     res.render('/notes');
// });

app.use('/notes', notesRouter)
