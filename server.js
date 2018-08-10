// Initialize express server
const cors = require("cors");
const express = require("express");
const path = require("path");
const app = express();



// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));

app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});

app.use(cors());
// Start the app by listening on the default Heroku port
app.listen(process.env.PORT || 5432);