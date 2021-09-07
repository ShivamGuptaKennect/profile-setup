const mongoose = require('mongoose');
const logger = require('../logger/logger');

module.exports = function () {
    // mongoose fix all deprecation warnings
    mongoose.set('useNewUrlParser', true);
    mongoose.set('useFindAndModify', false);
    mongoose.set('useCreateIndex', true);
    mongoose.set('useUnifiedTopology', true);


    // Database connection
    mongoose.connect('mongodb://mongodb/profileapi')
        .then(() => {
            logger.info('Connected to MongoDB...')
            console.log('Connected to MongoDB...')
        })
        .catch((error) => console.error(error));

};