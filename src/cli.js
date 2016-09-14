'use strict';

require('colors');
const httpStatus = require('./index');
const codes = require('./status-codes');

// Print all status codes if none are provided
if (!process.argv[2]) {
    Object.keys(codes).forEach(code =>
        printCode(code, codes[code].message, codes[code].description));

    process.exit(0);
}

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

httpStatus(process.argv[2], (err, msg, desc) => {
    if (err) {
        console.log(err.red);

        process.exit(1);
    }

    printCode(process.argv[2], msg, desc);
});
