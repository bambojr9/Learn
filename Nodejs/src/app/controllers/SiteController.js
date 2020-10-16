const Course = require('../models/Course');

class SiteController {
  // [GET] /home
  index(req, res) {
    // res.render('home');
    Course.find({}, function (err, courses) {
      // docs.forEach
      if (!err) {
        res.json({ data: courses });
      } else {
        res.status(400).json({ error: 'Error!!!' });
      }
    });
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
