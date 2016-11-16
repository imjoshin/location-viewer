$(document).on("ready", function(){
  var map;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.8 , lng: -98.5625},
    zoom: 5
  });
});
