const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
var jwt = require("jsonwebtoken");

const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_5sngs",
	password: "25cn4Zj2fbVGUHGu",
	database: "lab_todo02_55tvqp",
});

connection.connect(() => {
	console.log("Database is connected");
});

// Export connection to use in other files
global.connection = connection;

// Create express app
const app = express();
const port = 3000;

// Parse various different custom JSON types as JSON
app.use(bodyParser.json({ type: "application/json" }));

// Register endpoints
app.get("/setcookie", (req, res) => {
	res.cookie("cookieName", "cookieValue");
	res.send("Set cookie successfully!");
});

app.get("/signjwt", (req, res) => {
	const token = jwt.sign(
		{
			data: "foobar",
		},
		"secret",
		{ expiresIn: "1h" }
	);
	res.send("The token is " + token);
});

app.listen(port, () => {
	console.log(`Example app listening on port ${port}`);
});
