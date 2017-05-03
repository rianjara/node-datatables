/**
 * Created by richard.jara on 07/04/2017.
 */

var promise = require('bluebird');

var options = {
    // Initialization Options
    promiseLib: promise
};

var pgp = require('pg-promise')(options);
//var connectionString = 'postgres://postgres:personal@localhost:5432/prueba';
var connectionString = 'postgres://rianjara:rianjara@localhost:5432/Node';
var db = pgp(connectionString);

module.exports = db;