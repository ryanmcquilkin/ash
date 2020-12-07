const mysql = require('mysql');

module.exports = async () =>
	new Promise((resolve, reject) => {
		const connection = mysql.createConnection({
			host: 'localhost',
			user: 'root',
			password: '12345',
			database: 'ash',
		});
		connection.connect((error) => {
			if (error) {
				reject(error);
				return;
			}
			resolve(connection);
		});
	});
