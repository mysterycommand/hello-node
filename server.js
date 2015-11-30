const path = require('path');

const connect = require('connect');
const serveStatic = require('serve-static');

const DIR = path.join(__dirname, 'static');
const PORT = 8080;

connect()
    .use(serveStatic(DIR))
    .listen(PORT);
