http-status-cli
======

Why
------
I always forget what some status codes are and what they do—therefore I find this tool handy to do a quick lookup.

Installation
------
```
npm install -g http-status-cli
```

or

```
npm install --save http-status-cli
```

Features
------
* HTTP Status code message CLI lookup
* Use it as a module in your project

Usage
------
![http-status-418](http://i.imgur.com/wNvqpBV.jpg)

or

```js
var httpStatus = require('http-status-cli');

httpStatus(418, function(err, msg, desc) {
    if (err) {
        console.log(err);
    }

    console.log(msg, desc);
});

// Output:
I'm a teapot
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, 
Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. 
The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP 
status is used as an easter egg in some websites, including Google.com.
```

Tests
------
```
npm test
```

Sources
------
* [https://www.addedbytes.com/articles/for-beginners/http-status-codes/](https://www.addedbytes.com/articles/for-beginners/http-status-codes/)
* [https://en.wikipedia.org/wiki/List_of_HTTP_status_codes](https://en.wikipedia.org/wiki/List_of_HTTP_status_codes)

Contribution
------
Contributions are appreciated.

License
------
MIT-licensed. See LICENSE.
