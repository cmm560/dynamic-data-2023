//Setup our server
const http = require('http');
//define the port and the app will have access from (80,0000,0000 are default )
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
// get the url
const path = request.url;

if( (path == "") || (path == "/" ) ) {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("home Page")
} else if(path == "/about") {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("About page")
} else if(path == "/contact") {
    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("<h1>Contact Us</h1>")
} else {
    response.writeHead(404 , { "Content-Type" : "Text/Plain" })
    response.end("Not Found")
}



    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Hello World")
} )

//start the server
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop" ))

