'use strict'

var app = require('./app');
var port = 3002;

// Create Server
app.listen(port, () => {
    console.log('Server listening on http://localhost:'+port);
});
