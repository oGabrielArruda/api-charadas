const mongoose = require('mongoose');

const credentials = require('./credentials');

function startConnection() {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    console.log(credentials.connectionString);
    if (credentials.connectionString) {
        mongoose.connect(credentials.connectionString);
    }
}

module.exports = startConnection();