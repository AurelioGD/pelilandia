const express = require('express')
const morgan = require('morgan')
const path = require('path')

require('dotenv').config()
    //Importing the routes
const routeIndex = require('./routes/index')


const app = express();


//settings
app.set('port', process.env.PORT || 4000)
app.set('view engine', 'ejs')
app.set('views', path.join(__dirname, 'views'))


//middlewares
app.use(express.static(path.join(__dirname, 'public')))
app.use(morgan('dev'))


//routes
app.use(routeIndex);


//starting the server
app.listen(app.get('port'), () => {
    console.log('Server Started on port ' + app.get('port'))
})