'use strict';

var statusCodes = require('./status-codes');

module.exports = function httpStatus(code) {
    var msg = statusCodes[code];
    if (msg) {
        return msg;
    } else {
        throw 'HTTP status code not found';
    }
};
