http-status-cli
======

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
```
http-status 418

// Output:
418 - I'm a teapot
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, 
Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. 
The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP 
status is used as an easter egg in some websites, including Google.com.
```

or

```
var httpStatus = require('http-status-cli');

console.log(httpStatus(418).message, httpStatus(418).description);

// Output:
I'm a teapot
This code was defined in 1998 as one of the traditional IETF April Fools' jokes, in RFC 2324, 
Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. 
The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP 
status is used as an easter egg in some websites, including Google.com.
```

License
------
MIT-licensed. See LICENSE.
