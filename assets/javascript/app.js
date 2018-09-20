var userQuery = "";


$("#button").on("click", function () {
  userQuery = $("#autocomplete-input").val();
  callAPI();
});

function callAPI() {
  var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=';
  var search = searchUrl + userQuery;

  $.ajax({
    url: search,
    method: "GET",
    dataType: "json"
  }).then(function (response) {
    console.log(response);
  });

}