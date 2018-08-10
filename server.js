// Initialize express server

// const httpProxy = require("http-proxy");

const express = require("express");
const path = require("path");
// const cors = require("cors");
var router = express.Router();
const app = express();

const https = require("https");

const apiForwardingUrl = "https://api.yelp.com/v3/businesses";

// https.get(apiForwardingUrl, res => {
//     console.log(res);
// })


// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));

app.use(require("./middleware/headers"))

app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});

// var apiProxy = httpProxy.createProxyServer();




app.all("/api", function(req, res, next) {
    
    res.status(200).json("TEST")
    // res.status(200).json(req.headers.authorization);

    // apiProxy.web(req, res, {target: apiForwardingUrl});
    // res.send("req made to /api/");

    next();
})

router.get("/api", function(req, res, next){
    request({
        uri: apiForwardingUrl,
    })
})

// app.use(cors());
// app.use(require("./middleware/headers"));

// TEST ENDPOINT
// app.use("/api", function(req, res){
//     let authHeader = req.headers.authorization;
//     res.json(authHeader);
// })
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5432, function(){
    console.log("App running.");
});

// app.listen(process.env.PORT || 5432);

