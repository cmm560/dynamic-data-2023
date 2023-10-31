const express = require('express')

const expressHandlebars = require('express-handlebars')

const app = express()

// static files or folders are specified before any route
app.use(express.static(__dirname + "/public"))


//configure our express app to use handlebars
app.engine('handlebars',expressHandlebars.engine({
    defaultlayout: 'main',
}))



app.set('view engine','handlebars')
//ends handlebar configuration


const port = process.env.port || 3000
//routes go before 404 and 500
app.get('/',(req,res) => {
    res.render('home')
})

app.get('/about',(req,res)=>{
    res.render('about',{ 
        title:"About Miami",
        pageTitle: "About Miami Travel",
        image:"miami1.jpg",
        description:"Miami is a beautiful city" 
    })
})
//this generates an error bc the parameter names dont match

app.get('/nightlife',(req,res)=>{
    res.render('nightlife')
})

//Error handling -> app.use() basic express route
app.use((req,res) => {
    res.type('text/plain')
    res.status(404)
    res.send('404 - not found')
})

//Server Error 500
app.use( (error,req,res,next) => {
    console.error(error.message)
    res.type('text/plain')
    res.status(500)
    res.send('500 - server error')
})



app.listen(port,()=>{
    console.log('Server started http:??localhost:${port}')
    console.log('Server starter http://localhost:'+port)
    console.log('To close pres ctrl + c')
})
