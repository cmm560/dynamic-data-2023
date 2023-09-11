//Setup our server
const http = require('http');
//define the port and the app will have access from (80,0000,0000 are default )
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Hello World")
} )

//start the server
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop" ))

