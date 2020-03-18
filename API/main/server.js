var express = require('express');
var Express = express();
var bodyparser = require('body-parser');
var consign = require('consign');
var expressvalidator = require('express-validator');
var multiparty = require('connect-multiparty');
var sql = require('mssql');
var fs = require ('fs');

Express.set ('view engine' , 'ejs');
Express.set ('views' , '../../WEB/views');
Express.set (bodyparser.urlencoded({extended:true}));
Express.set (bodyparser.json());
Express.use(expressvalidator()); // inicia expressvalidator
Express.use(express.static("../../WEB/public")); //indica onde esta os assets
Express.use(multiparty()); //recebe imagens ao servidor


consign().include('../routers').into(Express);

var ioni =  Express.listen(3002 , function (){
   
      console.log('[  NIB  ]')

}) 

var io = require('socket.io').listen(ioni);
Express.set('io' , io );

module.exports =  Express ; 