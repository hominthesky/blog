var randnum = Math.random();
var pnum = 4;
var rand1 = Math.round(randnum * (pnum - 1)) + 1;
images = [];
images[1] = require("../images/random/icon-1.png");
images[2] = require("../images/random/icon-2.png");
images[3] = require("../images/random/icon-3.png");
images[4] = require("../images/random/icon-4.png");
window.image = images[rand1];
