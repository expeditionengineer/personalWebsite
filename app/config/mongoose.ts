var mongoose = require('mongoose');

module.exports = function() {
    var db = mongoose.connect(process.env.MONGODB_URI);
    require('../app/models/user.server.model');
    return db;
}