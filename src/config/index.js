import mongoose from 'mongoose';

import credentials from './credentials';

function startConnection() {
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);
    console.log(credentials.connectionString);
    if (credentials.connectionString) {
        mongoose.connect(credentials.connectionString);
    }
}

export default startConnection();