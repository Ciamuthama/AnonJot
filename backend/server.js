require('dotenv').config();

const express = require('express');
const morgan = require('morgan');
const mongoose = require ('mongoose');
const notesRouter = require('./routes/routes.js')
//const route = require("./api/routes.js")
const cors = require('cors') 


const app = express();
mongoose.connect(process.env.CONNECT_DB)
.then(() => {
console.log('connected to database')
}).catch((err) => {
    console.log(err)
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', 'https://anonjot.vercel.app');
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, PUT, DELETE');
  

  next();
}); 
app.use(morgan('dev'));
app.get('/', (req,res)=>{
     res.json("hello").redirect('/notes');
 });

// app.post('/new', (req,res)=>{
//     res.render('/new')
// });

// app.get('/note', (req,res)=>{
//     res.render('/notes');
// });
//app.use("/api/", routes)
app.use('/notes', notesRouter)

const listener = app.listen( 3000, () => {
    console.log(`connected to server` + listener.address().port)
})
