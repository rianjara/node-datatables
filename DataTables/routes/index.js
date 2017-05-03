var express = require('express');
var router = express.Router();

var db = require("../models/database");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.get('/estudiantes', function(req, res, next) {

    console.log(req.originalUrl);

    var where = "";

    if(req.query.nombre){
        where = "WHERE nombre=$1";
    }

    var query = 'SELECT * FROM public."Estudiantes" ' + where + ' ORDER BY codigo ASC';

    db.query(query, req.query.nombre)
        .then(function (data) {
            res.status(200)
                .json(data);
        })
        .catch(function (err) {
            return next(err);
        });
});


module.exports = router;
