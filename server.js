// // Initialize express server
// const express = require("express");
const path = require("path");
// const app = express();

// app.use(require("./middleware/headers"));
// // Serve only the static files from the dist directory
// app.use(express.static(__dirname + "/dist/yelpAPI-client"));

// app.get("*", function(req, res) {
//     res.sendfile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
// });
// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 5432);

///////////////////

var express = require('express'),
    request = require('request'),
    bodyParser = require('body-parser'),
    app = express();

var myLimit = typeof(process.argv[2]) != 'undefined' ? process.argv[2] : '100kb';
console.log('Using limit: ', myLimit);

// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));

app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});

app.use(bodyParser.json({limit: myLimit}));

app.all('*', function (req, res, next) {

    // Set CORS headers: allow all origins, methods, and headers: you may want to lock this down in a production environment
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Methods", "GET, PUT, PATCH, POST, DELETE");
    res.header("Access-Control-Allow-Headers", req.header('access-control-request-headers'));

    if (req.method === 'OPTIONS') {
        // CORS Preflight
        res.send();
    } else {
        var targetURL = req.header('Target-URL');
        if (!targetURL) {
            res.send(500, { error: 'There is no Target-Endpoint header in the request' });
            return;
        }
        request({ url: targetURL + req.url, method: req.method, json: req.body, headers: {'Authorization': req.header('Authorization')} },
            function (error, response, body) {
                if (error) {
                    console.error('error: ' + response.statusCode)
                }
//                console.log(body);
            }).pipe(res);
    }
});

app.set('port', 4200 || 5432);
// app.set('port', process.env.PORT || 5432);

app.listen(app.get('port'), function () {
    console.log('Proxy server listening on port ' + app.get('port'));
});