/**
 * Created by isak16 on 2017-03-20.
 */
var express = require("express");
var bodyParser = require('body-parser');

var app = express();
app.use(bodyParser.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.get("/", function (request, response) {
    response.send("/api");
});

app.get("/api", function (request, response) {
    response.send({"api":1333});
});

app.post("/api", function (request, response) {
    response.send({"apiDomain":"/api"});
});

app.listen(3000);

