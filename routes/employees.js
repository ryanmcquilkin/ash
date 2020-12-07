var express = require('express');
var router = express.Router();

const connection = require('../connection');
const sqlQuery = require('../query');

router.get('/', async function (req, res, next) {
	const conn = await connection().catch((e) => {});
	const results = await sqlQuery(conn, 'SELECT * FROM employees').catch(
		console.log
	);
	res.send(results);
});

router.post('/', async function (req, res, next) {
	const conn = await connection().catch((e) => {});
	const { firstName, lastName, address1 } = req.params;
	const results = await sqlQuery(
		conn,
		`INSERT INTO table_name (first_name, last_name, address_1)
		VALUES (${firstName}, ${lastName}, ${address1});`
	).catch(console.log);
	res.send(results);
});

module.exports = router;
