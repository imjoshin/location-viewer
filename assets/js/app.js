$(document).on("ready", function(){
  var map, heatmap;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.3894133 , lng: -84.5751897},
    zoom: 7
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
          map: map,
          radius: 25,
          opacity: .9,
          maxIntensity: 70
        });

        google.maps.event.addListener(map, 'zoom_changed', zoomChanged);

        $("#loading").fadeOut(300);
      }
    });
  }

  function zoomChanged(){
    zoomLevel = map.getZoom();
    if (zoomLevel >= 7) {
      console.log("Changed to 120");
      heatmap.set("maxIntensity", 120);
    } else {
      console.log("Changed to 250");
      heatmap.set("maxIntensity", 250);
    }
  }
});
