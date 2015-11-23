'use strict';

var assert = require('assert');
var httpStatus = require('../src/index');

describe('http status', function() {
    it('should return status and description if the code is valid', function() {
        assert.equal('I\'m a teapot', httpStatus(418).message);
        assert.equal(
            'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP status is used as an easter egg in some websites, including Google.com.',
            httpStatus(418).description
        );
    });

    it('should throw an exception if the code is invalid', function() {
        assert.throws(function() { httpStatus(1337) }, Error, 'HTTP status code not found');
    });
});
