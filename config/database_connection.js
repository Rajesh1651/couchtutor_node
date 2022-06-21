/**  including .env file */
var mongoUrl 	= 	'mongodb://192.168.11.214:27017/';
var MongoClient = 	require('mongodb').MongoClient;
var _db;
var dbName 		= 	'learning_rajendra_node';
module.exports = {
	connectToServer: function (callback) {
		MongoClient.connect(mongoUrl, { useNewUrlParser: true }, function (err, client) {
			const db = client.db(dbName);
			_db = db;
			return callback(err);
		});
	},
	getDb: function () {
		return _db;
	}
};
