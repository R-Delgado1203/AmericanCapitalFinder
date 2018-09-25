$(document).ready(function () {
  //google api key AIzaSyDTZRIT6DforQUfSkNAOPXkdeC0s3OxD_I

  //api call/build domm
  function callAPI(query) {
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?format=json&formatversion=2&action=query&prop=extracts&exintro&explaintext&redirects=1&callback=?&titles=';    
    var wikiSearch = wikiUrl + query;

    $.ajax({
      url: wikiSearch,
      method: "GET",
      dataType: "json"
    }).then(function (response) {
      console.log(response);

      var description = response.query.pages[0].extract;
      console.log(description);
      $("#info-p").text(description);

      var pageId = response.query.pages[0].pageid;
      var pageLink = "https://en.wikipedia.org/?curid=" + pageId
      $("#wiki-link").attr("href", pageLink);
      $("#wiki-link").text("Link to Wikipedia");
      console.log(pageLink);


      //google static img appi call
      var mapApiLink = "https://maps.googleapis.com/maps/api/staticmap?center=" + query + "&zoom=13&size=600x300&maptype=roadmap&key=AIzaSyDTZRIT6DforQUfSkNAOPXkdeC0s3OxD_I"
      var map = $("<img>").attr("src", mapApiLink);
      map.appendTo("#map-p");

      /* var wikiDiv = $("<div>");
      wikiDiv.text(description.toString());
      wikiDiv.attr("class", "col s7")
      wikiDiv.attr("id", "return");
      $("#response").append(wikiDiv); */

    });
    


/*     var mapUrl = 'https://maps.googleapis.com/maps/api/place/textsearch/json?query=' + query + '&key=AIzaSyDTZRIT6DforQUfSkNAOPXkdeC0s3OxD_I&callback=?' + query;
    var mapSearch = mapUrl + query;

    $.ajax({
      url: mapSearch,
      method: "GET",
      dataType: "jsonp"
    }).then(function (response) {
      console.log(response);
    }); */

  }//end callAPI 

  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyAPe5Vamx0vehzVhTJEtzjjXRlp6QvvHXA",
    authDomain: "project-1-cities-72d06.firebaseapp.com",
    databaseURL: "https://project-1-cities-72d06.firebaseio.com",
    projectId: "project-1-cities-72d06",
    storageBucket: "project-1-cities-72d06.appspot.com",
    messagingSenderId: "715446005740"
  };
  firebase.initializeApp(config);

  var db = firebase.database();
  var statesObj = {};
  db.ref().on('value', function (snapshot) {
    statesObj = snapshot.val();
    console.log(statesObj);
  });
  console.log(statesObj);

  $("#submit-btn").on("click", function () {
    var state = $("#state-list").val();
    state = state.replace(/ /g, "_");
    console.log(state);
    var city = statesObj[state];
    if (city) {
      $("#map-p").empty();
      $("#info-title").text(city);
      callAPI(city);
    };
  });//end submit-btn

  //fill auto-complete form
  $('input.autocomplete').autocomplete({
    data: {
      "New York": null,
      "Maryland": null,
      "Georgia": null,
      "Maine": null,
      "Texas": null,
      "Louisiana": null,
      "North Dakota": null,
      "Idaho": null,
      "Massachusetts": null,
      "Nevada": null,
      "West Virginia": null,
      "Wyoming": null,
      "South Carolina": null,
      "Ohio": null,
      "New Hampshire": null,
      "Colorado": null,
      "Iowa": null,
      "Delaware": null,
      "Kentucky": null,
      "Pennsylvania": null,
      "Connecticut": null,
      "Montana": null,
      "Hawaii": null,
      "Indiana": null,
      "Mississippi": null,
      "Missouri": null,
      "Alaska": null,
      "Michigan": null,
      "Nebraska": null,
      "Arkansas": null,
      "Wisconsin": null,
      "Alabama": null,
      "Vermont": null,
      "Tennessee": null,
      "Oklahoma": null,
      "Washington": null,
      "Arizona": null,
      "South Dakota": null,
      "Rhode Island": null,
      "North Carolina": null,
      "Virginia": null,
      "California": null,
      "Oregon": null,
      "Utah": null,
      "New Mexico": null,
      "Illinois": null,
      "Minnesota": null,
      "Florida": null,
      "Kansas": null,
      "New Jersey": null
    },
  });//end autocomplete form build
  $('.sidenav').sidenav();
}); //end documentready


