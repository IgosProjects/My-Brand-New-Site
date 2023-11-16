const express = require('express');
const app = express();

app.get('/', function (request, response) {
    response.sendFile(__dirname + '/index.html');
});

app.listen(1337, function () {
    console.log('Server is running on port 3000');
});
