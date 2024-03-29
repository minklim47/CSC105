const express = require("express");
const app = express();
const port = 3000;
const mysql = require("mysql2");
const bodyParser = require("body-parser");
const bcrypt = require("bcryptjs");
const { check, validationResult, cookie } = require("express-validator");
var jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser")

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
app.use(cookieParser());
app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

app.get("/", (req, res) => {
  res.send("hello world!");
});

app.post(
  "/register",
  check("password")
    .notEmpty()
    .withMessage("password cannot be empty")
    .isLength({ min: 8 })
    .withMessage("password must be at least 8 characters")
    .matches(/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,}$/)
    .withMessage(
      "password must have at least 1 digit, uppercase, and lowercase"
    ),
  async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.json({ errors: errors.array() });
    }
    const hash = await bcrypt.hash(password, 10);
    connection.query(
      `INSERT INTO users (username, hashed_password) VALUES (?,?)`,
      [username, hash],
      (err, rows) => {
        if (err) {
          res.json({
            success: false,
            data: null,
            error: err.message,
          });
        } else {
          console.log(rows);
          if (rows) {
            res.json({
              success: true,
              data: {
                message: "create success",
              },
            });
          }
        }
      }
    );
  }
);
app.post("/login", async (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  connection.query(
    `SELECT * FROM users WHERE username = ?`,
    [username],
    async (err, rows) => {
      if (err) {
        res.json({
          success: false,
          data: null,
          error: err.message,
        });
      } else {
        numRows = rows.length;
        if (numRows == 0) {
          res.json({
            success: false,
            message: "this username does not exist",
          });
        } else {
          const isMatch = await bcrypt.compare(
            password,
            rows[0].hashed_password
          );
          if (!isMatch) {
            res.json({
              success: false,
              message: "the password is incorrect",
            });
          } else {
            const token = jwt.sign(
              {
                userId: rows[0].id,
              },
              "ZJGX1QL7ri6BGJWj3t",
              { expiresIn: "1d" }
            );
            res.cookie("user", token);
            res.json({
              success: true,
              message: "the password is correct",
              user: rows[0],
            });
          }
        }
      }
    }
  );
});

// app.get("/setcookie", (req, res) => {
//   res.cookie("cookieName", "cookieValue");
//   res.send("Set cookie successfully!");
// });

app.get("/checklogin", (req, res) => {
  console.log(req.cookies);
  const token = req.cookies.user;

  var decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
  console.log(decoded);

  if (decoded) {
    res.json({
      success: true,
      message: "User is logged in with ID: " + decoded.userId,
    });
  } else {
    res.json({
      success: false,
      message: "User is not logged in",
    });
  }
});

app.get("/todo/all", (req, res) => {
  const token = req.cookies.user
  const decoded = jwt.verify(token, "ZJGX1QL7ri6BGJWj3t");
  console.log(decoded.userId);
  connection.query("SELECT * FROM items WHERE owner_id = ?", [decoded.userId], (err, rows) => {
		// Check if cannot find the data in the database then return the error
		if (err) {
			res.json({
				success: false,
				data: null,
				error: err.message,
			});
		} else {
			// Return data to the client if success
			return res.json({
				success: true,
				data: rows,
				error: null,
			});
		}
	});
})