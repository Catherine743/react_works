// import json server
const jsonServer = require('json-server');

// create resume-server
const rbServer = jsonServer.create();

// router
const router = jsonServer.router('db.json')

// middleware
const middleware = jsonServer.defaults()

// PORT
const PORT = 3000;

// create a middleware for rb-server
rbServer.use(middleware);

// router for rb-server
rbServer.use(router);

rbServer.listen(PORT, () => {
    console.log(`RB-Server started running at PORT: ${PORT}....waiting for the client request..`);

})