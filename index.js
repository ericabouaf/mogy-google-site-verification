
var request = require('google-oauth-jwt').requestWithJWT();

var BASE_URI = 'https://www.googleapis.com/siteVerification/v1';

// Generic authenticated request
var doRequest = function(method, path, data, config, cb) {

    var params = {
        url: (BASE_URI + path),
        method: method,
        headers: {
            'content-type': 'application/json'
        },
        json: true,
        body: data,
        jwt: {
            email: config.clientEmail,
            key: config.key,
            scopes: ['https://www.googleapis.com/auth/siteverification']
        }
    };

    request(params, function (err, response, body) {
        if (err) {
            return cb(err);
        }
        if (response.statusCode !== 200) {
            return cb(err, body);
        }
        cb(null, body);
    });

};


exports.getToken = function (input, config, cb) {
    doRequest("POST", "/token", input, config, cb);
};

exports.insert = function (input, config, cb) {
    doRequest("POST", "/webResource?verificationMethod="+input.verificationMethod, input.webResource, config, cb);
};


exports.list = function (input, config, cb) {
    doRequest("GET", "/webResource", undefined, config, cb);
};


exports.get = function (input, config, cb) {
    doRequest("GET", "/webResource/"+input.id, undefined, config, cb);
};


exports.update = function (input, config, cb) {
    doRequest("PUT", "/webResource/"+input.id, input.webResource, config, cb);
};


exports.delete = function (input, config, cb) {
    doRequest("DELETE", "/webResource/"+input.id, undefined, config, cb);
};
