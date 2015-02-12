(function(homeController) {
	homeController.init = function (app)
	{
		app.get("/", function(req, res){
		res.render("index", { title: "Express + Vash" });
		});
	};
})(module.exports); //module.exports is everything that this function is exporting