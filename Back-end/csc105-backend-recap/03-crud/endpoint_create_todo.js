module.exports = (req, res) => {
	// The JSON body
	const payload = req.body;

	connection.query(
		`INSERT INTO users (username) VALUES (?)`,
		[payload.userName],
		(err, rows) => {
			// Check if cannot find the data in the database then return the error
			if (err) {
				res.json({
					success: false,
					data: null,
					error: err.message,
				});
			} else {
				// Return data to the client if success
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
};
