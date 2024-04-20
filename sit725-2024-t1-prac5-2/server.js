var express = require("express")

var app = express()
// changed port from 3000 to 8080
var port = process.env.port || 8080;

app.use(express.static(__dirname + '/'))
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

require('./dbConnection.js');
let router = require('./routers/router.js');

let http = require('http').createServer(app);
let io = require('socket.io')(http);

app.use('/api/food', router);

app.get('/', (req, res) => {
    res.render(index.html);
});

//socket test
io.on('connection', (socket) => {
    console.log('a user connected'); socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    setInterval(() => {
        socket.emit('number', parseInt(Math.random() * 10));
    }, 1000);
});
http.listen(port, () => {
    console.log("Listening on port ", port);
});

// app.listen(3000, () => {
//     console.log('express server started ' + port);
// }); 