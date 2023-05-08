// Import dependencies
const express = require("express");
const bodyParser = require("body-parser");

// Create express app
const app = express();
const port = 3000;
app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.get("/hello", (req, res) => {
	res.send({
		name: "Apisit Maneerat",
		nickName: "Mixko",
		university: "KMUTT",
	});
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
