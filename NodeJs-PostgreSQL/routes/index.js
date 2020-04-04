var express = require('express');
var router = express.Router();

const {
  Pool,
  Client
} = require('pg')
const pool = new Pool({
  user: 'postgres',
  host: 'localhost',
  database: 'nodepostgre',
  password: 'ducthang5555',
  port: 5432,
})


/* GET home page. */
router.get('/', function (req, res, next) {
  // pool.query('SELECT * FROM public.contact', (err, res) => {
  //   console.log(res.rows)
  //   pool.end()
  // })
  res.render('index', {
    title: 'Express'
  });
});
/* GET them. */
router.get('/them', function (req, res, next) {
  res.render('them', {
    title: 'Them du lieu vao PostgreSQL'
  });
});
/* POST them */
router.post('/them', function (req, res, next) {
  var ten = req.body.ten,
    tuoi = req.body.tuoi;
  pool.query('INSERT INTO contact (ten,tuoi) VALUES ($1,$2)', ['ten', tuoi], (err, res) => {})
  res.render('them', {
    title: 'Them du lieu vao PostgreSQL'
  });
});
/* GET xem du lieu. */
router.get('/xem', function (req, res, next) {
  pool.query('SELECT * FROM public.contact', (err, DATA) => {
    res.render('xem', {
      title: 'xem du lieu vao PostgreSQL',
      data: DATA.rows
    });
  })
});
/* GET xoa du lieu. */
router.get('/xoa/:idcanxoa', function (req, res, next) {
  var idcanxoa = req.params.idcanxoa;
  pool.query('DELETE FROM contact WHERE id=($1)', [idcanxoa], (err, DATA) => {
    res.redirect('/xem')
  })
});
/* GET sua du lieu. */
router.get('/sua/:idcansua', function (req, res, next) {
  var idcansua = req.params.idcansua;
  pool.query('SELECT * FROM contact WHERE id=($1)', [idcansua], (err, DATA) => {
    res.render('sua', {
      title: 'xem du lieu vao PostgreSQL',
      data: DATA.rows
    });
  })
});
/* POST sua du lieu. */
router.post('/sua/:idcansua', function (req, res, next) {
  var idcansua = req.params.idcansua;
  var ten = req.body.ten,
    tuoi = req.body.tuoi;
  pool.query('UPDATE contact SET ten= $1, tuoi=$2 WHERE id=($3)', [ten, tuoi, idcansua], (err, DATA) => {
    res.redirect('/xem')
  })
});

module.exports = router;