const newsRouter = require('./news')

function route(app){


// app.get('news/:slug',newsRouter)    
app.use('/news',newsRouter)

app.get('/', function (req, res) {
    res.render('home');
  });
  // app.get('/news', function (req, res) {
  //   res.render('news');
  // });
  app.get('/search', function (req, res) {
    console.log(req.query)
    res.render('search');
  });
  app.post('/search', function (req, res) {
    console.log('------------')
    console.log(req.body)
      console.log('------------')
    res.render('search');
  });
}
module.exports= route;