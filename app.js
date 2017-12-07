// app.js

// 패키지 불러오기
var express = require('express');
var app = express();
var bodyParser = require('body-parser');
var mongoose = require('mongoose');

// bodyParser 설정
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json);

// 서버 포트 설정
var port = process.env.PORT || 8080;

// 라우터 설정
var router = require('./routes')(app)

// 서버 구동
var server = app.listen(port, function(){
    console.log("Express server has started on port " + port);
});