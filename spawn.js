"use strict";

var spawn = require("child_process").spawn;

var node = spawn("node", ["output"]);

var i = 0;
var output = [];

node.stdout.on("data", function (data) {
    if (data !== null || data !== undefined) {
        output[i] = data.toString("utf8").trim();
        i += 1;
    }
});

node.stderr.on("data", function (data) {
    console.log("stderr: " + data);
});

node.on('close', function (code) {
    if (code !== 0) {
        console.log("ps process exited with code " + code);
    }
    console.log(output);
    console.log("process ended");
});


