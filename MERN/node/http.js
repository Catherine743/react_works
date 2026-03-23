const http = require('http')

http.createServer((req, res) => {
    res.write("<h1>Request Resolved</h1>");
    res.end()
}).listen(3000, () => {
    console.log("Server started running....");
    
})