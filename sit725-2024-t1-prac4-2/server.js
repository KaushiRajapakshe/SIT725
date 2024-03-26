var express = require("express")
const { MongoClient, ServerApiVersion } = require('mongodb');
var app = express()
const uri = "mongodb+srv://<username>:<password>@<cluster>/<database>, ";
var port = process.env.port || 3000;
let collection;

app.use(express.static(__dirname + '/public'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//*update your server.js

















app.listen(3000, () => {
    console.log('express server started');
    runDBConnection();
}); 