var express = require("express")
var app = express()
var path = require('path');
var port = process.env.port || 3000;

// Get function that returns a static calculation if the user visits the default site
app.get('/', function(req, res) {
	const number1 = 10;
	const number2 = 15;
	const total = number1 + number2;

	res.send({
		'number1': number1,
		'number2': number2,
		'total': total
	});
});

// Get function that returns a dynamic calculation based on user input in the URL
app.get('/numbers', function(req, res) {
	const number1 = req.query.number1;
	const number2 = req.query.number2;
	const total = Number(number1) + Number(number2);

	res.send({
		'number1': Number(number1),
		'number2': Number(number2),
		'total': total
	});
});

app.listen(port,()=>{
	console.log("App listening to: "+port)
})