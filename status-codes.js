module.exports = {
    100: {
        message: 'Continue',
        description: 'A status code of 100 indicates that (usually the first) part of a request has been received without any problems, and that the rest of the request should now be sent.'
    },
    101: {
        message: 'Switching Protocols',
        description: 'HTTP 1.1 is just one type of protocol for transferring data on the web, and a status code of 101 indicates that the server is changing to the protocol it defines in the "Upgrade" header it returns to the client. For example, when requesting a page, a browser might receive a status code of 101, followed by an "Upgrade" header showing that the server is changing to a different version of HTTP.'
    },
    102: {
        message: 'Processing',
        description: 'As a WebDAV request may contain many sub-requests involving file operations, it may take a long time to complete the request. This code indicates that the server has received and is processing the request, but no response is available yet. This prevents the client from timing out and assuming the request was lost.'
    },
    200: {
        message: 'OK',
        description: 'The 200 status code is by far the most common returned. It means, simply, that the request was received and understood and is being processed.'
    },
    201: {
        message: 'Created',
        description: 'A 201 status code indicates that a request was successful and as a result, a resource has been created (for example a new page).'
    },
    202: {
        message: 'Accepted',
        description: 'The status code 202 indicates that server has received and understood the request, and that it has been accepted for processing, although it may not be processed immediately.'
    },
    203: {
        message: 'Non-Authoritative Information',
        description: 'A 203 status code means that the request was received and understood, and that information sent back about the response is from a third party, rather than the original server. This is virtually identical in meaning to a 200 status code.'
    },
    204: {
        message: 'No Content',
        description: 'The 204 status code means that the request was received and understood, but that there is no need to send any data back.'
    },
    205: {
        message: 'Reset Content',
        description: 'The 205 status code is a request from the server to the client to reset the document from which the original request was sent. For example, if a user fills out a form, and submits it, a status code of 205 means the server is asking the browser to clear the form.'
    },
    206: {
        message: 'Partial Content',
        description: 'A status code of 206 is a response to a request for part of a document. This is used by advanced caching tools, when a user agent requests only a small part of a page, and just that section is returned.'
    },
    207: {
        message: 'Multi-Status',
        description: 'The message body that follows is an XML message and can contain a number of separate response codes, depending on how many sub-requests were made.'
    },
    208: {
        message: 'Already Reported',
        description: 'The members of a DAV binding have already been enumerated in a previous reply to this request, and are not being included again.'
    },
    226: {
        message: 'IM Used',
        description: 'The server has fulfilled a request for the resource, and the response is a representation of the result of one or more instance-manipulations applied to the current instance.'
    },
    300: {
        message: 'Multiple Choices',
        description: 'The 300 status code indicates that a resource has moved. The response will also include a list of locations from which the user agent can select the most appropriate.'
    },
    301: {
        message: 'Moved Permanently',
        description: 'A status code of 301 tells a client that the resource they asked for has permanently moved to a new location. The response should also include this location. It tells the client to use the new URL the next time it wants to fetch the same resource.'
    },
    302: {
        message: 'Found',
        description: 'A status code of 302 tells a client that the resource they asked for has temporarily moved to a new location. The response should also include this location. It tells the client that it should carry on using the same URL to access this resource.'
    },
    303: {
        message: 'See Other',
        description: 'A 303 status code indicates that the response to the request can be found at the specified URL, and should be retrieved from there. It does not mean that something has moved - it is simply specifying the address at which the response to the request can be found.'
    },
    304: {
        message: 'Not Modified',
        description: 'The 304 status code is sent in response to a request (for a document) that asked for the document only if it was newer than the one the client already had. Normally, when a document is cached, the date it was cached is stored. The next time the document is viewed, the client asks the server if the document has changed. If not, the client just reloads the document from the cache.'
    },
    305: {
        message: 'Use Proxy',
        description: 'A 305 status code tells the client that the requested resource has to be reached through a proxy, which will be specified in the response.'
    },
    306: {
        message: '(Unused) (Switch Proxy)',
        description: 'No longer used. Originally meant "Subsequent requests should use the specified proxy."'
    },
    307: {
        message: 'Temporary Redirect',
        description: '307 is the status code that is sent when a document is temporarily available at a different URL, which is also returned. There is very little difference between a 302 status code and a 307 status code. 307 was created as another, less ambiguous, version of the 302 status code.'
    },
    308: {
        message: 'Permanent Redirect',
        description: 'The request, and all future requests should be repeated using another URI. 307 and 308 (as proposed) parallel the behaviours of 302 and 301, but do not allow the HTTP method to change. So, for example, submitting a form to a permanently redirected resource may continue smoothly.'
    },
    400: {
        message: 'Bad Request',
        description: 'A status code of 400 indicates that the server did not understand the request due to bad syntax.'
    },
    401: {
        message: 'Unauthorized',
        description: 'A 401 status code indicates that before a resource can be accessed, the client must be authorised by the server.'
    },
    402: {
        message: 'Payment Required',
        description: 'The 402 status code is not currently in use, being listed as "reserved for future use".'
    },
    403: {
        message: 'Forbidden',
        description: 'A 403 status code indicates that the client cannot access the requested resource. That might mean that the wrong username and password were sent in the request, or that the permissions on the server do not allow what was being asked.'
    },
    404: {
        message: 'Not Found',
        description: 'The best known of them all, the 404 status code indicates that the requested resource was not found at the URL given, and the server has no idea how long for.'
    },
    405: {
        message: 'Method Not Allowed',
        description: 'A 405 status code is returned when the client has tried to use a request method that the server does not allow. Request methods that are allowed should be sent with the response (common request methods are POST and GET).'
    },
    406: {
        message: 'Not Acceptable',
        description: 'The 406 status code means that, although the server understood and processed the request, the response is of a form the client cannot understand. A client sends, as part of a request, headers indicating what types of data it can use, and a 406 error is returned when the response is of a type not i that list.'
    },
    407: {
        message: 'Proxy Authentication Required',
        description: 'The 407 status code is very similar to the 401 status code, and means that the client must be authorised by the proxy before the request can proceed.'
    },
    408: {
        message: 'Request Timeout',
        description: 'A 408 status code means that the client did not produce a request quickly enough. A server is set to only wait a certain amount of time for responses from clients, and a 408 status code indicates that time has passed.'
    },
    409: {
        message: 'Conflict',
        description: 'A 409 status code indicates that the server was unable to complete the request, often because a file would need to be editted, created or deleted, and that file cannot be editted, created or deleted.'
    },
    410: {
        message: 'Gone',
        description: 'A 410 status code is the 404\'s lesser known cousin. It indicates that a resource has permanently gone (a 404 status code gives no indication if a resource has gine permanently or temporarily), and no new address is known for it.'
    },
    411: {
        message: 'Length Required',
        description: 'The 411 status code occurs when a server refuses to process a request because a content length was not specified.'
    },
    412: {
        message: 'Precondition Failed',
        description: 'A 412 status code indicates that one of the conditions the request was made under has failed.'
    },
    413: {
        message: 'Payload Too Large',
        description: 'The 413 status code indicates that the request was larger than the server is able to handle, either due to physical constraints or to settings. Usually, this occurs when a file is sent using the POST method from a form, and the file is larger than the maximum size allowed in the server settings.'
    },
    414: {
        message: 'URI Too Long',
        description: 'The 414 status code indicates the the URL requested by the client was longer than it can process.'
    },
    415: {
        message: 'Unsupported Media Type',
        description: 'A 415 status code is returned by a server to indicate that part of the request was in an unsupported format.'
    },
    416: {
        message: 'Range Not Satisfiable',
        description: 'A 416 status code indicates that the server was unable to fulfill the request. This may be, for example, because the client asked for the 800th-900th bytes of a document, but the document was only 200 bytes long.'
    },
    417: {
        message: 'Expectation Failed',
        description: 'The 417 status code means that the server was unable to properly complete the request. One of the headers sent to the server, the "Expect" header, indicated an expectation the server could not meet.'
    },
    418: {
        message: 'I\'m a teapot',
        description: 'This code was defined in 1998 as one of the traditional IETF April Fools\' jokes, in RFC 2324, Hyper Text Coffee Pot Control Protocol, and is not expected to be implemented by actual HTTP servers. The RFC specifies this code should be returned by tea pots requested to brew coffee. This HTTP status is used as an easter egg in some websites, including Google.com.'
    },
    422: {
        message: 'Unprocessable Entity',
        description: 'The request was well-formed but was unable to be followed due to semantic errors.'
    },
    423: {
        message: 'Locked',
        description: 'The resource that is being accessed is locked.'
    },
    424: {
        message: 'Failed Dependency',
        description: 'The request failed due to failure of a previous request (e.g., a PROPPATCH).'
    },
    425: {
        message: 'Unordered Collection',
        description: ''
    },
    426: {
        message: 'Upgrade Required',
        description: 'The client should switch to a different protocol such as TLS/1.0, given in the Upgrade header field.'
    },
    428: {
        message: 'Precondition Required',
        description: 'The origin server requires the request to be conditional. Intended to prevent "the \'lost update\' problem, where a client GETs a resource\'s state, modifies it, and PUTs it back to the server, when meanwhile a third party has modified the state on the server, leading to a conflict."'
    },
    429: {
        message: 'Too Many Requests',
        description: 'The user has sent too many requests in a given amount of time. Intended for use with rate limiting schemes.'
    },
    431: {
        message: 'Request Header Fields Too Large',
        description: 'The server is unwilling to process the request because either an individual header field, or all the header fields collectively, are too large.'
    },
    451: {
        message: 'Unavailable For Legal Reasons',
        description: 'Defined in the internet draft "A New HTTP Status Code for Legally-restricted Resources".[66] Intended to be used when resource access is denied for legal reasons, e.g. censorship or government-mandated blocked access. A reference to the 1953 dystopian novel Fahrenheit 451, where books are outlawed.'
    },
    500: {
        message: 'Internal Server Error',
        description: 'A generic error message, given when an unexpected condition was encountered and no more specific message is suitable.'
    },
    501: {
        message: 'Not Implemented',
        description: 'The server either does not recognize the request method, or it lacks the ability to fulfill the request. Usually this implies future availability (e.g., a new feature of a web-service API).'
    },
    502: {
        message: 'Bad Gateway',
        description: 'The server was acting as a gateway or proxy and received an invalid response from the upstream server.'
    },
    503: {
        message: 'Service Unavailable',
        description: 'The server is currently unavailable (because it is overloaded or down for maintenance). Generally, this is a temporary state.'
    },
    504: {
        message: 'Gateway Timeout',
        description: 'The server was acting as a gateway or proxy and did not receive a timely response from the upstream server.'
    },
    505: {
        message: 'HTTP Version Not Supported',
        description: 'The server does not support the HTTP protocol version used in the request.'
    },
    506: {
        message: 'Variant Also Negotiates',
        description: 'Transparent content negotiation for the request results in a circular reference.'
    },
    507: {
        message: 'Insufficient Storage',
        description: 'The server is unable to store the representation needed to complete the request.'
    },
    508: {
        message: 'Loop Detected',
        description: 'The server detected an infinite loop while processing the request.'
    },
    509: {
        message: 'Bandwidth Limit Exceeded',
        description: 'This status code is not specified in any RFCs. Its use is unknown.'
    },
    510: {
        message: 'Not Extended',
        description: 'Further extensions to the request are required for the server to fulfil it.'
    },
    511: {
        message: 'Network Authentication Required',
        description: 'The client needs to authenticate to gain network access. Intended for use by intercepting proxies used to control access to the network (e.g., "captive portals" used to require agreement to Terms of Service before granting full Internet access via a Wi-Fi hotspot).'
    },
};
