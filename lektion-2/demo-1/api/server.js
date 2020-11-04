const app = require('./app');
const mongoose = require('mongoose');
const port = 9999;

const serverURI = 'http://localhost:' + port;
const mongoURI = 'mongodb+srv://Joakim:BytMig123@cluster0.aglmi.mongodb.net/Todos?retryWrites=true&w=majority'

app.listen(port, () => console.log('Webserver: ' + serverURI));

mongoose
.set('useCreateIndex', true)
.connect(mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}, () => console.log('Connected to DB'))