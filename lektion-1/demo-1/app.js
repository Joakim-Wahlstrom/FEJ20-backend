const express = require('express');
const app = express();

const port = 9999;
const serverURI = 'http://localhost:' + port

// Middleware
const middleware = (req, res, next) => {
    console.log('running middleware')
    next()
}

app.use('/post', middleware)

app.get('/', (req, res) => {
    res.send('Homepage');
})

app.get('/post', (req, res) => {
    res.send('Post')
})

app.listen(port, () => console.log('Webserver: ' + serverURI))