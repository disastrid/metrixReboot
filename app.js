var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/userData'); // the database is folder 'data' in my home directory, database name is userData
var Server = require('socket.io');
var io = new Server();

var routes = require('./routes/index');
var users = require('./routes/users');
var study = require('./routes/study');

var app = express();