$(document).on("ready", function(){
  var isMobile = false;
  if( /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent) ) {
    isMobile = true;
    $("#info").css({
      "font-size": "16px",
      "top": "50px"
    });
  }
  var map, heatmap;

  map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 44.3894133 , lng: -84.5751897},
    zoom: (isMobile ? 5 : 7)
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
        data.forEach(function(point){
          points.push(new google.maps.LatLng(point["lat"], point["lng"]));
        });

        heatmap = new google.maps.visualization.HeatmapLayer({
          data: points,
          map: map,
          radius: 25,
          opacity: .9,
          maxIntensity: (isMobile ? 750 : 120)
        });

        google.maps.event.addListener(map, 'zoom_changed', zoomChanged);

        $("#loading").hide();
      },
      error: function(data){
        alert("An error occured while loading the data.\nPlease refresh the page.");
      }
    });
  }

  function zoomChanged(){
    zoomLevel = map.getZoom();
    if (zoomLevel >= (isMobile ? 5 : 7)) {
      heatmap.set("maxIntensity", (isMobile ? 750 : 120));
    } else {
      heatmap.set("maxIntensity", (isMobile ? 1000 : 500));
    }
  }
});
