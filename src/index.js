'use strict';

var statusCodes = require('./status-codes');

module.exports = function httpStatus(code) {
    var msg = statusCodes[code];
    if (!msg) {
        throw new Error('HTTP status code not found');
    } else {
        return msg;
    }
};
