'use strict';

var assert = require('assert');
var httpStatus = require('../src/index');

describe('http status', function() {
    it('should return status and description if the code is valid', function() {
        httpStatus(200, function(err, msg, desc) {
            assert.equal(err, null);
            assert.equal(msg, 'OK');
            assert.equal(
                desc,
                'The 200 status code is by far the most common returned.' +
                ' It means, simply, that the request was received and' +
                ' understood and is being processed.'
            );
        });
    });

    it('should return an error message if the code is invalid', function() {
        httpStatus(1337, function(err) {
            assert.equal(err, 'HTTP status code not found');
        });
    });
});
