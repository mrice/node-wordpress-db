/**
 * node-wordpress-db.js
 * michael rice 2012
 */

var mysql = require('mysql');
var utils = require('./lib/utils.js');


/**
 * The connect method makes a connection to the database
 */
exports.connect = function(connectData, success, err) {
	var defaults = {
		host     : "localhost",
		port     : 3306,
		user     : "admin",
		password : "",
		database : "wordpress"
	}
	var validateConnectData = function(eval) {
		if (utils.notSetOrEmpty(eval.host))
			eval.host=defaults.host;
		if (utils.notSetOrEmpty(eval.port))
			eval.port=defaults.port;
		if (utils.notSetOrEmpty(eval.user))
			eval.user=defaults.user;
		if (utils.notSetOrEmpty(eval.password))
			eval.password=defaults.password;
		if (utils.notSetOrEmpty(eval.database))
			eval.database=defaults.password;
		return eval;
	}

	var conn = {};
	conn.info = validateConnectData(connectData);
	conn.mysql = mysql.createConnection(conn.info);

	conn.mysql.connect( function(errorCondition) {
			if (utils.notSetOrEmpty(errorCondition))
				success({ok:true, conn:conn});
			else
				err({ok:false, message:"could not connect to db"});
		}
	);
};

/**
 * As you might expect, this method disconnects from the database
 * 
 */
exports.disconnect = function(connection, success, err) {
	if (utils.notSetOrEmpty(connection) || utils.notSetOrEmpty(connection.mysql)) {
		err({ok:false, message:"invalid wordpress connection to terminate"});
	} else {
		connection.mysql.end(function(errorCondition) {
			if (utils.notSetOrEmpty(errorCondition))
				success({ok:true});
			else
				err({ok:false, message:"could not disconnect from db"});
		});
	}
};