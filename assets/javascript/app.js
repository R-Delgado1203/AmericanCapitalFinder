var userQuery = "Phoenix, AZ";
var queryURL = "https://en.wikipedia.org/w/api.php?action=query&format=json&list=search&utf8=1&srsearch="+ userQuery;

$.ajax({
  url: queryURL,
  method: "GET",
}).then(function(response) {
  console.log(response);
});