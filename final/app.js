const express = require('express')

//add the view engine 
const expressHandlebars = require('express-handlebars') 

const app = express()

const handler = require('./lib/handler')


//Static files or folders are specified before any route
//app.use(express.static(__dirname + '/public'))

//configure our express app to use handlebars
app.engine('handlebars', expressHandlebars.engine({
    defaultLayout: 'main',
}))

app.set('view engine','handlebars')
//ends handlebar configuration
const bodyParser = require('body-parser')
app.use(bodyParser.urlencoded({extended: true}))


const port = process.env.port || 3000

app.get('/',(req,res)=>{
    var data = require('./data/categories.json')
    console.log("data")
    res.render('home',{ data })
})


app.get('/mad',(req,res)=>{
    const data = require('./data/mad-data.json')
    res.render('madform',{data})
})

app.get('/madprocess',(req,res)=>{
    res.render('madprocess',{req})
})

//Error handling ->  app.use() basic express route 
app.use((req,res) => {
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.status(500)
    res.render('500') 
}) 

// setup listener
app.listen(port,()=>{
    console.log(`Server started http://localhost:${port}`)
    console.log('To close pres Ctrl-C')
})