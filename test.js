var wdb = require('./node-wordpress-db.js');

wdb.connect({}, 
	function(result) {
		var connection = result.conn;
		
		console.log("got a database connection to "+connection.info.host+", port "+connection.info.port);
		
		//start running some queries
		
		
		
		
		
		
		
		console.log("attempting to disconnect... ");
		wdb.disconnect(connection,
			function() {
				console.log("...disconnected!");
			},
			function(err) {
				console.log("...could not disconnect: "+err.message);
			});
	},
	function(err) {
		console.log(err.message);
	}
);