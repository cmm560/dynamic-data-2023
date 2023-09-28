//Setup our server
const http = require('http');
const fs = require('fs');
//define the port and the app will have access from (80,0000,0000 are default )
const port = process.env.PORT || 3000;

const server = http.createServer( (request,response) => {
// get the url
const path = request.url;
const displayPage = (path,res,contentType, responseCode = 200) => {
    fs.readFile(__dirname + path , (errors, content) => {
        if(errors) {
            res.writeHead(500,{'Content-type': 'text/plain'})
            return res.end('500 - Internal Error')
        }
        res.writeHead(responseCode,{"Content-Typpe" : "text/html"})
        res.end(content)
    })
}
const server = http.createServer( (request,response) => {
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

switch(path) {
    case '':
    case '/':
    displayPage('/public/home.html',response,"text/html")
    break
    case '/about':
    displayPage('/public/about.html',response,"text/html")
    break
    case '/contact':
    displayPage('/public/contact.html',response,"text/html")
    break
    displayPage('/public/img/logo.jpg',response,"image/jpg")
    break
    default:
    displayPage('/public/404.html',response,"text/html",400)
    break
}

    response.writeHead(200 , { "Content-Type" : "Text/Plain" })
    response.end("Hello World")
} )

//start the server
server.listen(port, () => console.log("server started on port " + port + " press ctrl + c to stop" ))
})
