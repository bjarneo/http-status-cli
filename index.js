'use strict';

var message = require('./status-codes');

if (!process.argv[2]) {
    return false;
}

if (message[process.argv[2]]) {
    console.log(message[process.argv[2]]);
} else {
    console.log('Could not find the HTTP status message');
}