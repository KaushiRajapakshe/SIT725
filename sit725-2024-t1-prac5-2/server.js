var express = require("express")
var app = express()
var port = process.env.port || 3000;

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./dbConnection.js');
let router = require('./routers/router.js');

app.use('/api/food', router);

app.get('/', (req, res) => {
    res.render(index.html);
});


app.listen(3000, () => {
    console.log('express server started ' + port);
}); 