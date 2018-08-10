// Initialize express server
const express = require("express");
const path = require("path");
const app = express();

// app.use(require("./middleware/headers"));


// Serve only the static files from the dist directory
app.use(express.static(__dirname + "/dist/yelpAPI-client"));

app.get("*", function(req, res) {
    res.sendfile(path.join(__dirname + "/dist/yelpAPI-client/index.html"));
});
// TEST ENDPOINT
app.use("/api", function(req, res){
    res.send("This works!");
})
// Start the app by listening on the default Heroku port
app.listen(4200 || 5432);
// app.listen(process.env.PORT || 5432);

