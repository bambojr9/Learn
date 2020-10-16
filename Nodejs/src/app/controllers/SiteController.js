const Course = require('../models/Course');

class SiteController {
  // [GET] /home
  index(req, res, next) {
    // Course.find({}, function (err, courses) {
    //   if (!err) {
    //     res.json({ data: courses });
    //   } else {
    //     next(err);
    //   }
    // });
    Course.find({})
      .then((courses) => res.render('home', { courses }))
      .catch(next);
  }
  // [GET] /search
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
