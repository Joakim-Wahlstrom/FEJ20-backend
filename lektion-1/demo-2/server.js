const app = require('./app');

const port = 9999;

const serverURI = 'http://localhost:' + port;

app.listen(port, () => console.log('Webserver running at: ' + serverURI));