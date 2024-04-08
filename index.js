const http = require("http");
const fs = require("fs");

// function for sum of array
function sumOfArray(arr) {
	var totalsum = 0;
	for (let i = 0; i < arr.length; i++) {
		totalsum += arr[i];
	}
	return totalsum;
}
var arr = [1, 3, 4, 5, 5, 5, 7]
console.log(sumOfArray(arr));

//function to count words from data.text file
function readfile(path) {
	try {
		var data = fs.readFileSync(path, 'utf8');
		console.log(data);
		var total = data.split(" ");
		return total.length;
	} catch (err) {
		console.log(err);
	}
}
var path = "./data.text"
console.log(readfile(path));



//Simple server with response "hello world"
const server = http.createServer((req, res) => {
	res.statusCode = 200;
	res.end("Hello world");
});
server.listen(3000, () => {
	console.log("server is runing  on port number 3000 ");
});

