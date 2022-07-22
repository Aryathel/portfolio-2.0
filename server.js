const { createServer } = require("http");
const next = require("next");

const isDevMode = process.env.NODE_ENV !== 'production';
const port = process.env.PORT ? process.env.PORT : 3000;

const nextJsApp = next({ dev: isDevMode });
const nextJsRequestHandler = nextJsApp.getRequestHandler();
nextJsApp.prepare().then(() => {
    createServer((req, res) => {
        const url = new URL(req.url, "http://w.w");
        nextJsRequestHandler(req, res, url);
    }).listen(port);
}).catch((ex) => {
    console.error(ex.stack);
    process.exit(1);
});