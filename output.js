"use strict";

process.stdin.setEncoding("utf8");

var questions = [
    "What is your name",
    "What is your fav programming language",
    "Which IDE do you use?"
];

var i = 0;
var currentTime = 0;
var answers = [];

var interval = setInterval(function () {
    i = Math.floor(Math.random() * (2 - 0 + 1)) + 0;
    process.stdout.write(questions[i] + "\n");
}, 1000);

var timeOut = setTimeout(function () {
    clearInterval(interval);
}, 8000);

interval;
timeOut;