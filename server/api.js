const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require("mongoose");
const bodyParser = require("body-parser")
const jwt = require('jsonwebtoken');
require("dotenv").config();

var app = express();
var PORT = 3000;
app.use(bodyParser.json());

//support parsing of application/x-www-form-urlencoded post data
app.use(bodyParser.urlencoded({ extended: true }));
// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', '*');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
app.use(router);
const cors = require('cors');

// use it before all route definitions
app.use(cors());



// Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
 
app.listen(PORT, function(err){
    // Add headers
app.use(function (req, res, next) {

    // Website you wish to allow to connect
    res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888');

    // Request methods you wish to allow
    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    // Request headers you wish to allow
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    // Set to true if you need the website to include cookies in the requests sent
    // to the API (e.g. in case you use sessions)
    res.setHeader('Access-Control-Allow-Credentials', true);

    // Pass to next layer of middleware
    next();
});
    if (err) console.log(err);
    console.log("Server listening on PORT", PORT);
});
// Single routing


const connection = (closure) => {
    return MongoClient.connect('mongodb://127.0.0.1:27017', (err, db) => {
      if (err) return console.log(err);
  
      closure(db);
    });
  };

// Error handling
const sendError = (err, res) => {
    response.status = 501;
    response.message = typeof err == 'object' ? err.message : err;
    res.status(501).json(response);
};

// Response handling
let response = {
    status: 200,
    data: [],
    message: null
};

// Get employees
router.get('/employee', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
     connection((db) => {
        var dbo = db.db("employeeCollection");
        dbo.collection('Employee')
            .find()
            .toArray()
            .then((employees) => {
                response = employees;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// create employees
app.use(express.urlencoded());
app.use(express.json());
app.use(express.urlencoded({ extended: true}));
router.post("/createEmployee",  function (req, res) {
    // process request & send response to client
    connection((db) => {
            var dbo = db.db("employeeCollection");
            var data = req.body
            dbo.collection("Employee").insertOne(data, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
            });
            res.json("1 document inserted");
    });
   });

   //auth employee

   router.post("/authEmployee",  function (req, res) {
    connection((db) => {
            var dbo = db.db("authEmployee");
            var data = req.body
            dbo.collection('auth')
            .find({username:data['username']})
            .toArray()
            .then((employees) => {
                var dataresponse = {
                    role: employees[0]['role'],
                    username: employees[0]['username']
                }
                if(employees[0]['password'] == data['password']){
                    //random Secret  key
                    // let jwtSecretKey = "123";

                    // const token = jwt.sign( dataresponse,jwtSecretKey);
                    console.log(dataresponse)
                    res.status(200).json(dataresponse);
                }
                else{
                    res.status(501).json("password mismatched");
                }
                //res.status(501).json("password mismatched");
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
   });

   router.post("/registerEmployee",  function (req, res) {
    var error = false;
    connection((db) => {
        var dbo = db.db("authEmployee");
        var data = req.body
        dbo.collection('auth')
            .insertOne(data)
            .then(() => {
                res.json("success");
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
   });


// update employees
router.put('/updateEmployee', (req, res) => {
    connection((db) => {
        var dbo = db.db("employeeCollection");
        var data = req.body
        dbo.collection("Employee").replaceOne({"id": data.id},data, function(err, res) {
          if (err) throw err;
          console.log("1 document updated");
        });
        res.json("1 document updated");
});
});

// delete employees
router.delete('/deleteEmployee', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    connection((db) => {
        var dbo = db.db("employeeCollection");
        var data = req.body
        dbo.collection("Employee").deleteOne({"id": data.id}, function(err, res) {
          if (err) throw err;
          console.log("1 document deleted");
        });
        res.json("1 document deleted");
});
});

module.exports = router;