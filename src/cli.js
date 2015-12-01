'use strict';

var httpStatus = require('./index');

if (!process.argv[2]) {
    return false;
}

httpStatus(process.argv[2], function(err, msg, desc) {
    if (err) {
        console.log(err);
    }

    console.log('%d - %s', process.argv[2], msg);
    console.log(desc);
});
