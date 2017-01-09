var SunCalc = require('suncalc');
var Sugar = require('sugar');

Sugar.extend();

app.use(express.static(path.join(__dirname, '/www')));

console.log("Running in: "  + process.env.NODE_ENV);

var times = SunCalc.getTimes(new Date(), 45.4, -122.8);
console.log(times['sunrise'].format());
console.log(times['sunriseEnd'].format());
console.log(times['sunsetStart'].format());
console.log(times['sunset'].format());
