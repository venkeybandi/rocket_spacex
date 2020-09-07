

$.getJSON("https://api.spacexdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014",function(data){
	console.log(data);
});