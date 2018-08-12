// // Initialize express server
// const express = require("express");
// const path = require("path");
// const app = express();

// // Serve only the static files from the dist directory
// app.use(express.static(__dirname + "/dist/yelpAPI-client"));

// // Send all requests to index.html
// app.get("*", function(req, res) {
//     res.sendFile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
// });

// // Start the app by listening on the default Heroku port
// app.listen(process.env.PORT || 5432, function(){
//     console.log("App running.");
// });

////////////////////////////

require("dotenv").config() // dotenv provides a way to allow you to create secret keys that your application needs to function and keep them from going public.

// Initialize express server
const express = require("express");
const path = require("path");
const app = express();

const fetch = require("node-fetch");
// app.use(require("./middleware/headers"));

// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));

app.use(function(req, res, next){
    res.header('access-control-allow-origin', '*');
    res.header('access-control-allow-methods', 'GET, POST, PUT, DELETE');
    res.header('access-control-allow-headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
    next();
})

app.get('/yelp/test', (req, res) => {
    fetch("https://api.yelp.com/v3/businesses/search?location=anderson,in", {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "bearer " + process.env.YELPKEY
        }
    })
        .then(response => { return response.json(); })
        .then(result => { res.send(result); })
        .catch(err => console.log('Error meesage', err));
});

// Send all requests to index.html
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});

// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5432, function(){
    console.log("App running.");
});

