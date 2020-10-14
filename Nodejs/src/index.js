var path = require('path');
const express = require('express')
const app = express()
const port = 3000
var morgan = require('morgan')
var exphbs  = require('express-handlebars');
const helpers = require("./resources/lib/helpers");

app.use(express.static(path.join(__dirname,'/public')));

// HTTP logger
app.use(morgan('combined'))

// Template engine

// app.engine('.hbs', exphbs({
//   extname: '.hbs',
// }));
// app.set('view engine', 'hbs');
// app.set('views', path.join(__dirname, 'resoues\\views'));

// Template engine
app.set('views', path.join(__dirname, 'resources/views'));
app.engine('.hbs', exphbs({
        defaultLayout: 'main', 
        helpers      : helpers,
        extname: '.hbs',
        layoutsDir:'src/resources/views/layouts',
        partialsDir:['src/resources/views/partials', 'src/resources/views/templates'],
}));
app.set('view engine', '.hbs');
//end Template engine

app.get('/', function (req, res) {
  console.log(`x:${res}`)
  res.render('home');
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})