var express = require("express");
var router = express.Router();

const {
  Pool,
  Client
} = require("pg");
const pool = new Pool({
  user: "postgres",
  host: "localhost",
  database: "sanpham",
  password: "ducthang5555",
  port: 5432,
});
/* GET home page. */
router.get("/", function (req, res, next) {
  //
  // pool.query("SELECT NOW()", (err, res) => {
  //   console.log(err, res);
  //   pool.end();
  // });
  //

});
// api get data from postgreSql
router.get("/getdata01", function (req, res, next) {
  pool.query("SELECT * FROM public.product_info", (error, response) => {
    if (error) {
      console.log(error);
    } else {
      // console.log(response.rows);
      res.send(response.rows);
    }
  });

  // res.render("index", {
  //   title: "Express"
  // });
});
// get ADD PAGE
router.get("/add", function (req, res, next) {
  res.render("add", {});
});
// POST ADD PAGE
router.post("/add", function (req, res, next) {
  var product_name = req.body.product_name,
    product_price = req.body.product_price,
    image = req.body.image;
  pool.query(
    "INSERT INTO product_info (product_name,product_price,image) values ($1,$2,$3)",
    [product_name, product_price, image],
    (err, response) => {
      if (err) {
        res.send(err);
      } else {
        res.send("da them du lieu " + product_name + product_price + image);
      }
    }
  );
});
module.exports = router;