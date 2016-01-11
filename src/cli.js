'use strict';

require('colors');
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
        console.log(err.red);
        return;
    }

    printCode(process.argv[2], msg, desc);
});

function printCode(code, msg, desc) {
    if (code < 400) {
        code = code.green;
    } else if (code < 500) {
        code = code.yellow;
    } else {
        code = code.red;
    }
    console.log('%s - %s', code, msg.gray);
    console.log('  %s', desc);
}
