$(document).ready(function () {

  //api call/build domm
  function callAPI(query) {
    var wikiUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=';
    var wikiSearch = wikiUrl + query;
    

    $.ajax({
      url: wikiSearch,
      method: "GET",
      dataType: "json"
    }).then(function (response) {
      
      console.log(response);
      var description = response[2][0];
      console.log(description);
      var link = response[3][0];
      console.log(link);
      
      $("#info-p").text(description);
      $("#wiki-link").attr("href", link);
      $("#wiki-link").text("Link to Wikipedia");
      

      /* var wikiDiv = $("<div>");
      wikiDiv.text(description.toString());
      wikiDiv.attr("class", "col s7")
      wikiDiv.attr("id", "return");
      $("#response").append(wikiDiv); */

    });

    var mapUrl = "";
    var mapSearch = mapUrl + query;

    $.ajax({
      url: mapSearch,
      method: "GET",
      dataType: "json"
    }).then(function (response) {


    });


  }

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
  db.ref().on('value', function(snapshot) {
    statesObj = snapshot.val();
  });
  

  $("#submit-btn").on("click", function () {
    $("div#info-card").show();
    $("div#map-card").show();
    var obj = document.createElement("audio");
    obj.src = "http://soundbible.com/grab.php?id=1844&type=wav";
    obj.volume = 0.1;
    obj.autoPlay = false;
    obj.preLoad = true;
    obj.controls = true;
    obj.play();
    var state = $("#state-list").val();
    state = state.replace(/ /g,"_");
    console.log(state);
    var city = statesObj[state];
    if (city){
      $("#info-title").text(city);
      callAPI(city);
    };
  });//end submit-btn
  
  //fill auto-complete form
  $('input.autocomplete').autocomplete({
    data: {
      "New York":null,
      "Maryland":null,
      "Georgia":null,
      "Maine":null,
      "Texas":null,
      "Louisiana":null,
      "North Dakota":null,
      "Idaho":null,
      "Massachusetts":null,
      "Nevada":null,
      "West Virginia":null,
      "Wyoming":null,
      "South Carolina":null,
      "Ohio":null,
      "New Hampshire":null,
      "Colorado":null,
      "Iowa":null,
      "Delaware":null,
      "Kentucky":null,
      "Pennsylvania":null,
      "Connecticut":null,
      "Montana":null,
      "Hawaii":null,
      "Indiana":null,
      "Mississippi":null,
      "Missouri":null,
      "Alaska":null,
      "Michigan":null,
      "Nebraska":null,
      "Arkansas":null,
      "Wisconsin":null,
      "Alabama":null,
      "Vermont":null,
      "Tennessee":null,
      "Oklahoma":null,
      "Washington":null,
      "Arizona":null,
      "South Dakota":null,
      "Rhode Island":null,
      "North Carolina":null,
      "Virginia":null,
      "California":null,
      "Oregon":null,
      "Utah":null,
      "New Mexico":null,
      "Illinois":null,
      "Minnesota":null,
      "Florida":null,
      "Kansas":null,
      "New Jersey":null
    },
  });//end autocomplete form build
  $('.sidenav').sidenav();
}); //end documentready


