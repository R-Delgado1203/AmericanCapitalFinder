$(document).ready(function () {

  //api call/build domm
  function callAPI(query) {
    var searchUrl = 'https://en.wikipedia.org/w/api.php?action=opensearch&format=json&callback=?&search=';
    var search = searchUrl + query;

    $.ajax({
      url: search,
      method: "GET",
      dataType: "json"
    }).then(function (response) {
      console.log(response);
      

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
    //callAPI(city, snapshot.val());
    statesObj = snapshot.val();
  });

  $("#submit-btn").on("click", function () {
    var state = $("#city-list").val();
    state = state.replace(/ /g,"_");
    console.log(state);
    var city = statesObj[state];
    if (city){
      callAPI(city);
    }
    //console.log(queryTerm);
    //callAPI(queryTerm);
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
