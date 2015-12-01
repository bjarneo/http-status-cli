'use strict';

var assert = require('assert');
var httpStatus = require('../src/index');

describe('http status', function() {
    it('should return status and description if the code is valid', function() {
        httpStatus(418, function(err, msg, desc) {
            assert.equal(err, null);
            assert.equal(msg, 'I\'m a teapot');
            assert.equal(desc, 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP status is used as an easter egg in some websites, including Google.com.');
        });
    });

    it('should return an error message if the code is invalid', function() {
        httpStatus(1337, function(err) {
            assert.equal(err, 'HTTP status code not found');
        });
    });
});
