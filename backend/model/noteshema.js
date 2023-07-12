const mongoose = require('mongoose');
const Schema= mongoose.Schema;

const newSchema = new Schema({
    title:{
        type: String,
        required:false,
    },
    
    body:{
        type: String,
        required:false,
    },
}, {timestamps:true});

const Notes = mongoose.model("Notes",newSchema);
module.exports = Notes; 