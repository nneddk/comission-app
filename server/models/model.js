const mongoose = require('mongoose');
const dataSchema = new mongoose.Schema({
    price:{
        type: Number,
        default: 0
    },
    name: {
        type: String
    },
    email:{
        type: String
    },
    date:{
        type: Date,
        default: Date.now
    }

})

module.exports = mongoose.model('Data', dataSchema);