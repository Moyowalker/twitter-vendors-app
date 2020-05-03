require('./users');
const mongoose = require('mongoose');
const dbURI = 'mongodb://localhost:27017/vendorAuth';

mongoose.set('useCreateIndex', true);
mongoose.connect(dbURI, {
    userNewUrlParser: true,
    useUnifiedTopology: true
});

mongoose.connection.on('connected', () => {
    console.log(`Mongoose is currently connected to ${dbURI}`);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection has an error: ${err}`)
});

mongoose.connection.on('disconnected', () => {
    console.log('Mongoose is disconnected.')
});