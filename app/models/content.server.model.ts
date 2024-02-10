var mongoose = require('mongoose'), Schema=mongoose.Schema;

var ContentSchema = new Schema({
    title: String,
    body: String,
    created: {
        type: Date,
        default: Date.now
    }
});