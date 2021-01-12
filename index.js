// import express
const express = require('express')
// create an instance of an express app
const app = express()
// import express ejs layouts
const ejsLayouts = require('express-ejs-layouts')

// middleware
app.set('view engine', 'ejs')
app.use(ejsLayouts)
app.use('/loveit', require('./controllers/loveit'))
app.use('/leaveit', require('./controllers/leaveit'))

app.get('/', (req, res)=>{
    res.render('home.ejs')
})

app.listen(3000, ()=>{
    console.log('We out here on Port 3000')
})