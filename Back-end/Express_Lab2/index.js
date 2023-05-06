const express = require("express");
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const port = 3000;
const app = express();

const connection = mysql.createConnection({
	host: "server2.bsthun.com",
	port: "6105",
	user: "lab_uaqzo",
	password: "K3Ca8ShiHCtC3HOa",
	database: "lab_todo02_u5olet",
});
connection.connect(() => {
	console.log("Database is connected");
});

app.use(bodyParser.json({ type: "application/json" }));


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });

app.get("/", (req, res) => {
	res.send("Hello World!");
});

app.post("/login/basic", (req, res) => {
	const username = req.body.username;
	const password = req.body.password;
	connection.query( `SELECT * FROM users WHERE username = ? AND password = ?`, [username, password], (err, rows) => {
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		}
			numRows = rows.length;
			if (numRows == 0){
				res.json({
					success: false,
					message:"Login credential is incorrect",
				});
			} else {
				res.json({
					success:true,
					message: "Login credential correct",
					user: rows[0],

				})
			}
		
	})
})

