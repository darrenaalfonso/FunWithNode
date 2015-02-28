( function(data) {

	var seedData = require("./seedData");
	var database = require("./database");

	data.getNoteCategories = function (next)
	{
		next(null, seedData.initialNotes);
	};

	function seedDatabase() {
		database.getDb(function (err,db) {
			if (err) {
				console.log("Failed to seed database: " + err);
			} else {
				// test to see if data exists
				db.notes.count(function (err, count) {
					if (err) {
						console.log("Failed to retrieve database count")
					} else {
						if (count == 0) {
							
						}
					}
				});
			}
		});
	}

	seedDatabase();

})(module.exports);