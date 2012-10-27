/**
 * common utilities for node-wordpress-db
 * 
 */
exports.notSetOrEmpty = function(test) {
	if (test == 'undefined')
		return true;
	else if (test == null)
		return true;
	else if (test === "")
		return true;
	else
		return false;
};