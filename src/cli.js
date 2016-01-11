'use strict';

var httpStatus = require('./index');
var codes = require('./status-codes');

// Print all status codes if none are provided
if (!process.argv[2]) {
    Object.keys(codes).forEach(function(code) {
        printCode(code, codes[code].message, codes[code].description);
    });
    return;
}

httpStatus(process.argv[2], function(err, msg, desc) {
    if (err) {
        console.log(err);
    }

    printCode(process.argv[2], msg, desc);
});

function printCode(code, msg, desc) {
    console.log('%d - %s', code, msg);
    console.log(desc);
}
