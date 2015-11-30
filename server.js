const path = require('path');

const connect = require('connect');
const serveStatic = require('serve-static');

const STATIC_DIR = path.join(__dirname, 'static');
const BOOTSTRAP_DIR = path.join(__dirname, 'node_modules/bootstrap/dist');
const PORT = 8080;

connect()
    .use(serveStatic(STATIC_DIR))
    .use(serveStatic(BOOTSTRAP_DIR))
    .listen(PORT);
