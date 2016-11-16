$(document).on("ready", function(){
  var map, heatmap;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 39.8 , lng: -98.5625},
    zoom: 5
  });

  showHeatmap();

  function showHeatmap(){
    var points = [];
    $.ajax({
      type: "POST",
      dataType: "json",
      url: "scripts/ajax.php",
      data: {
        action: "getPoints",
      },
      cache: false,
      success: function(data) {
        console.log(data);
        data.forEach(function(point){
          points.push(new google.maps.LatLng(point["lat"], point["lng"]));
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: points,
          map: map
        });
      }
    });
  }
});
