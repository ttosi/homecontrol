var SunCalc = require('suncalc');
var Sugar = require('sugar');
var path = require('path');
var app = express();

app.use(express.static(path.join(__dirname, '/www')));

Sugar.extend();

// var mqtt = require('./mqtt/mqtt.js');
// console.log(mqtt.get());
//
// console.log("Running in: "  + process.env.NODE_ENV);
//
// var times = SunCalc.getTimes(new Date(), 45.4, -122.8);
// console.log(times['sunrise'].format());
// console.log(times['sunriseEnd'].format());
// console.log(times['sunsetStart'].format());
// console.log(times['sunset'].format());
