'use strict';

const statusCodes = require('./status-codes');

module.exports = function httpStatus(code, callback) {
    const statusCode = statusCodes[code];

    if (!statusCode) {
        callback('HTTP status code not found');
    } else {
        callback(null, statusCode.message, statusCode.description);
    }
};
