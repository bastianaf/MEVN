const mongoose = require ('mongoose');
const { Schema } = mongoose;

const Task = new Schema({
        title: String,
        mensaje: String
    });

module.exports = mongoose.model('Task', Task);