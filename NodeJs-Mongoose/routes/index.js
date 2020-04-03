var express = require('express');
var router = express.Router();
var contactModel = require('../model/contact.js')

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', {
    title: 'Express'
  });
});
/* Xem du lieu . */
router.get('/xem', function (req, res, next) {
  //tim tat ca id -> in ra
  contactModel.find({}, function (err, dulieu) {
    res.render('xem', {
      title: 'Xem dữ liệu ',
      data: dulieu
    });
  })
});
//xoa
router.get('/xoa/:idcanxoa', function (req, res, next) {
  var idcanxoa = req.params.idcanxoa;
  contactModel.findByIdAndRemove(idcanxoa).exec(); //exec = thu.c thi
  res.redirect('/xem')
});
//sua
router.get('/sua/:idcanxoa', function (req, res, next) {
  var id2 = req.params.idcanxoa;
  contactModel.find({
    _id: id2
  }, function (err, dulieu) {
    res.render('sua', {
      title: "Sửa dữ liệu",
      data: dulieu
    });
  })
});

/* Sưa du lieu post . */
router.post('/sua/:idcanxoa', function (req, res, next) {
  var id2 = req.params.idcanxoa;
  contactModel.findById(id2, function (err, dulieu) {
    if (err) return handleError(err);
    dulieu.ten = req.body.ten;
    dulieu.tuoi = req.body.tuoi;
    dulieu.save();
    res.redirect('/xem');
  });
});
//them
router.get('/them', function (req, res, next) {
  res.render('them', {
    title: "them dữ liệu"
  });
});
//post them
router.post('/them', function (req, res, next) {
  var item = {
    'ten': req.body.ten,
    'tuoi': req.body.tuoi
  }
  var dulieuthem = new contactModel(item)
  dulieuthem.save()
  res.redirect('/xem')
});


module.exports = router;