var express = require("express");
var router = express.Router();
const MongoClient = require("mongodb").MongoClient;
var chuyenthanhObjectId = require("mongodb").ObjectID;
const assert = require("assert");
// Connection URL
const url = "mongodb://localhost:27017";

// Database Name
const dbName = "contact";
/* GET home page. */
router.get("/", function(req, res, next) {
  res.render("index", {
    title: "Express"
  });
});
// get add data
router.get("/add", function(req, res, next) {
  res.render("adddata", {
    title: "ADD data"
  });
});
//post add data
router.post("/add", function(req, res, next) {
  var tenInput = req.body.ten,
    dienthoaiInput = req.body.dienthoai;
  var dulieu01 = {
    ten: tenInput,
    dienthoai: dienthoaiInput
  };
  const insertDocuments = function(db, callback) {
    // Get the documents collection
    const collection = db.collection("users");
    // Insert some documents
    collection.insert(dulieu01, function(err, result) {
      assert.equal(err, null);
      console.log("da them du lieu thanh cong ");
      callback(result);
    });
  };
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    insertDocuments(db, function() {
      client.close();
    });
  });
  res.redirect("/xem");
});

//xem du lieu
// get add data

//xem
router.get("/xem", function(req, res, next) {
  //find
  const findDocuments = function(db, callback) {
    const collection = db.collection("users");
    collection.find({}).toArray(function(err, docs) {
      assert.equal(err, null);
      callback(docs);
    });
  };
  //connect
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    findDocuments(db, function(dulieu) {
      res.render("xem", {
        title: "xem du lieu",
        data: dulieu
      });
      // console.log(dulieu);
      client.close();
    });
  });
});

//  Remove data
router.get("/remove/:idremove", function(req, res, next) {
  var idremove = chuyenthanhObjectId(req.params.idremove);
  const removeDocument = function(db, callback) {
    // Get the documents collection
    const collection = db.collection("users");
    //id  can xoa
    collection.deleteOne({ _id: idremove }, function(err, result) {
      assert.equal(err, null);
      console.log("Removed the document-Xoa thanh cong  ");
      callback(result);
      res.redirect("/xem");
    });
  };
  //connect
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);
    removeDocument(db, function() {
      client.close();
    });
  });
});
// Edit data
router.get("/edit/:idedit", function(req, res, next) {
  var idedit = chuyenthanhObjectId(req.params.idedit);
  //find
  // console.log(idedit);
  const findDocuments = function(db, callback) {
    const collection = db.collection("users");
    collection.find({ _id: idedit }).toArray(function(err, docs) {
      assert.equal(err, null);
      console.log("tim thay id");
      callback(docs);
    });
  };
  //connect
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    const db = client.db(dbName);
    findDocuments(db, function(dulieu) {
      // console.log(dulieu);
      res.render("edit", { title: "sua du lieu ", data: dulieu });
      client.close();
    });
  });
  /* POST UPDATE page. */
});
router.post("/edit/:idedit", function(req, res, next) {
  var idedit = chuyenthanhObjectId(req.params.idedit);
  var tenInput = req.body.ten,
    dienthoaiInput = req.body.dienthoai;
  var dulieu01 = {
    ten: tenInput,
    dienthoai: dienthoaiInput
  };
  const updateDocument = function(db, callback) {
    const collection = db.collection("users");
    collection.updateOne({ _id: idedit }, { $set: dulieu01 }, function(
      err,
      result
    ) {
      assert.equal(err, null);
      assert.equal(1, result.result.n);
      console.log("Updated the document with the field a equal to 2");
      callback(result);
    });
  };
  // Use connect method to connect to the server
  MongoClient.connect(url, function(err, client) {
    assert.equal(null, err);
    console.log("Connected successfully to server");
    const db = client.db(dbName);

    updateDocument(db, function() {
      client.close();
      res.redirect("/xem");
    });
  });
});
// Use connect method to connect to the server

module.exports = router;
