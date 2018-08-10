// Initialize express server
const express = require("express");
const path = require("path");
const cors = require("cors");
const app = express();

// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));
app.get("*", function(req, res) {
    res.sendFile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});

app.use(cors());
app.use(require("./middleware/headers"));

// TEST ENDPOINT
app.use("/api", function(req, res){
    res.json([]);
})
// Start the app by listening on the default Heroku port
app.listen(4200 || 5432, function(){
    console.log("App running.");
});

// app.listen(process.env.PORT || 5432);

