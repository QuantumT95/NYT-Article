//variable for authenticator key 

var APIkey = b75cecdf0c7d45e7b3f128acab76320a

//variables for user results

var queryTerm 	= "";
var numResults 	= 0;
var startYear 	= 0;
var endYear		= 0;

// Based on the queryTerm we will create a queryURL 
var queryURLBase = "https://api.nytimes.com/svc/search/v2/articlesearch.json?api-key=" + authKey + "&q=";

// Array to hold the various article info
var articleCounter = 0;

// create a query to run function 
function runQuery(numArticles, queryURL){
	{
			// The AJAX function uses the URL and Gets the JSON data associated with it. The data then gets stored in the variable called: "NYTData"
	$.ajax({url: queryURL, method: "GET"}) 
		.done(function(NYTData) {

			// logging the URL so we have access to it for troubleshooting
			console.log("------------------------------------")
			console.log("URL: " + queryURL);
			console.log("------------------------------------")

			// logging the NYTData to console, where it will show up as an object.
			console.log(NYTData);
			console.log("------------------------------------")

	}