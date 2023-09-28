const express = require('express');

const expresshandlebars = require('express-handlebars')

const app = express()

//configure our express app to use handlebars
app.engine('handlebars',expresshandlebars({
defaultlayout: 'main',
})

app.set('view engine','handlebars')
//ends handlebar configuration

const port = process.env.port || 3000
//routes go before 404 and 500
app.get('/',(req,res)=>{
    res.render('home')
})

app.get('/',(req,res)=>{
    res.render('about')
})
//this generates wrong bc the parameter names dont match - response should be res
app.get('nightlife',(request,response)=>{
    res.type('text/plain')
    res.send('Miami at Night')
})

//Error handling -> app.use() basic express route
app.use((req,res) => {
    res.type('text/plain')
    res.status(404)
    res.render('404')
})

//Server Error 500
app.use((error,req,res,next) => {
    console.log(error.message)
    res.type('text/plain')
    res.status(500)
    res.render('500')
})



app.listen(port,()=>{
    console.log('Server started http:??localhost:${port}')
    console.log('Server starter http://localhost:'+port)
    console.log('To close pres ctrl + c')
})
