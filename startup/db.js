const mongoose = require('mongoose');
const logger = require('../logger/logger');

module.exports = function () {
    // mongoose fix all deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);


    // Database connection
    mongoose.connect('mongodb://192.168.0.12:27018/profileapi')
        .then(() => logger.info('Connected to MongoDB...'))
        .catch((error) => console.error(error));

};