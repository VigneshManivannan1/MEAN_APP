const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const mongoose = require("mongoose");


var app = express();
var PORT = 3000;
 

app.use(router);
var cors = require('cors');

// use it before all route definitions
app.use(cors({origin: '*'}));
app.options('*', cors())
app.options('/createEmployee', cors())
 
app.listen(PORT, function(err){
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

router.post('/createEmployee',cors(), (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    connection((db) => {
            var dbo = db.db("employeeCollection");
            console.log("test")
            dbo.collection("Employee").insertOne(req, function(err, res) {
              if (err) throw err;
              console.log("1 document inserted");
            });
    });
});

// update employees
router.put('/updateEmployee', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    connection((db) => {
        db.collection('employee')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

// delete employees
router.delete('/deleteEmployee', (req, res) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    connection((db) => {
        db.collection('employee')
            .find()
            .toArray()
            .then((users) => {
                response.data = users;
                res.json(response);
            })
            .catch((err) => {
                sendError(err, res);
            });
    });
});

module.exports = router;