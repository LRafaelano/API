const express = require('express');
const morgan = require('morgan');
const bodyparser =require('body-parser');
const path = require('path');
const app = express()
 
app.get('/', function (req, res) {
  res.send('Hello World')
})
 
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));


//middleware
app.use(morgan('dev'));
app.use(bodyparser.urlencoded({extended: true}));
app.use(bodyparser.json({extended: true}));

//routes
app.use('/api',require('./routes/app'));

//public
app.use(express.static(path.join(__dirname, 'public')));

//vi



app.listen(app.get('port'), () =>{
    console.log('server on port: ', app.get('port'))
});
    
