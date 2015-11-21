'use strict';

var message = require('./status-codes');

if (!process.argv[2]) {
    return false;
}

var code = message[process.argv[2]];
if (code) {
    console.log('> ' + process.argv[2] + ' - ' + message[process.argv[2]]);
} else {
    console.log('Could not find the HTTP status message');
}
